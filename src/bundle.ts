/**
 * This script bundles all JSON files in one folder (and sub folders) into one bundle JSON.
 */

import Joi from "joi";
import glob from 'glob';
import path from "path";
import * as fs from "fs";

async function main() {
    const schema: Joi.Schema = Joi.object().keys({
        title: Joi.string().min(1).required(),
        date: Joi.string().min(1),
        authors: Joi.array().min(1).items(Joi.string()).required(),
        venue: Joi.string().min(1).required(),
        venueShort: Joi.string().min(1).required(),
        tags: Joi.array().items(Joi.string()),
        awards: Joi.array().items(Joi.string()),
        url: Joi.string().min(1),
        abstract: Joi.string(),
        bibtex: Joi.string(),
        project: Joi.string(),
    });

    const dryRun = process.env.DRY_RUN;
    if (dryRun) {
        console.log("Running in dry-run mode. No bundle json will be output.");
    }
    let exitCode: number = 0;

    // scan collection folder
    glob(path.join(__dirname, '..', 'collection/**/*.json'), (err, files) => {
        if (err) throw err;
        const collection: unknown[] = [];
        for (const file of files) {
            const content = fs.readFileSync(file, {encoding: 'utf-8'});
            try {
                const arr = JSON.parse(content);
                if (!Array.isArray(arr)) {
                    console.error("[Error] JSON object in", file, "is not an array");
                    if (dryRun) exitCode = 1;
                    continue;
                }
                const validations: Joi.ValidationResult[] = [];
                arr.forEach(obj => {
                    const r = schema.validate(obj);
                    validations.push(r);
                    if (!r.error) {
                        if (!obj.url) obj.url = null;
                        if (!obj.abstract) obj.abstract = null;
                        if (!obj.bibtex) obj.bibtex = null;
                        if (!obj.project) obj.project = null;
                        if (!obj.tags) obj.tags = [];
                        if (!obj.awards) obj.tag = [];
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
            console.log("Bundle complete");
        } else {
            if (exitCode === 0) {
                console.log("No errors detected.");
            } else {
                console.warn("Errors detected as above. Please try to fix them.")
            }
        }
    });

}

if (require.main === module) {
    main().catch(e => {
        console.error(e);
        process.exit(1);
    })
}