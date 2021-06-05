/**
 * This script bundles all JSON files in one folder (and sub folders) into one bundle JSON.
 */

import Joi from "joi";
import glob from 'glob';
import path from "path";
import * as fs from "fs";
import {strict} from "assert";

async function main() {
    const schema: Joi.Schema = Joi.object().keys({
        title: Joi.string().min(1).required(),
        date: Joi.string().min(1),
        authors: Joi.array().min(1).items(Joi.string()).required(),
        venue: Joi.string().min(1).required(),
        venueShort: Joi.string().min(1).required(),
        tags: Joi.array().items(Joi.string()),
        awards: Joi.array().items(Joi.string()),
        paperUrl: Joi.string().min(1),
        abstract: Joi.string(),
        bibtex: Joi.string(),
        projectUrl: Joi.string(),
    });

    const dryRun = process.argv[2] === '--dry-run';
    if (dryRun) {
        console.log("Running in dry-run mode. No bundle json will be output.");
    }
    let exitCode: number = 0;

    // scan collection folder
    const files: string[] = [];
    let ffs = glob.sync(path.join(__dirname, '..', 'collection/**/*.json'));
    files.push(...ffs);
    ffs = glob.sync(path.join(__dirname, '..', 'collection/**/*.js'));
    files.push(...ffs);
    console.log(`Found ${files.length} publication declaration files to bundle:`);
    files.forEach(f => console.log(`==> ${f}`));
    console.log();
    const collection: unknown[] = [];
    for (const file of files) {
        try {
            let arr: unknown[];
            if (path.extname(file).toLowerCase() === '.json') {
                const content = fs.readFileSync(file, {encoding: 'utf-8'});
                arr = JSON.parse(content);
            } else if (path.extname(file).toLowerCase() === '.js') {
                arr = require(file);
            } else {
                continue;
            }

            if (!Array.isArray(arr)) {
                console.error("[Error] JSON object in", file, "is not an array");
                if (dryRun) {
                }
                exitCode = 1;
                continue;
            }
            const validations: Joi.ValidationResult[] = [];
            arr.forEach(obj => {
                const r = schema.validate(obj);
                validations.push(r);
                if (!r.error) {
                    if (!obj.paperUrl) obj.url = null; obj.url = obj.paperUrl;
                    if (!obj.abstract) obj.abstract = null;
                    if (!obj.bibtex) obj.bibtex = null; else obj.bibtex = obj.bibtex.trim();
                    if (!obj.projectUrl) obj.project = null; else obj.project = obj.projectUrl;
                    if (!obj.tags) obj.tags = [];
                    if (!obj.awards) obj.awards = [];
                    collection.push(obj);
                }
            });
            if (validations.some(r => r.error)) {
                if (dryRun) exitCode = 1;
                console.log('[Warning] Invalid JSON structure with', validations.filter(r => r.error).length, 'errors in', file);
                validations.forEach((r, index) => {
                    if (r.error) {
                        console.log("==> Item with index", index)
                        r.error.details.forEach((e) => console.error(`====>`, e.message));
                    }
                })
            }
        } catch (e) {
            console.error("[Error] Failed to parse", file);
            console.error(e.toString());
            if (dryRun) exitCode = 1;
        }
    }
    if (!dryRun) {
        console.log();
        fs.writeFileSync(path.join(__dirname, '..', 'public', 'bundle.json'), JSON.stringify(collection));
        console.log("Bundle complete, output in public/bundle.json");
    } else {
        if (exitCode === 0) {
            console.log("No errors detected.");
        } else {
            console.warn("Errors detected as above. Please try to fix them.")
        }
    }
}

if (require.main === module) {
    main().catch(e => {
        console.error(e);
        process.exit(1);
    })
}