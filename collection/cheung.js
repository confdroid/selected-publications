module.exports = [
    {
        title: "ContractGuard: Defend Ethereum Smart Contracts with Embedded Intrusion Detection",
        date: "2020",
        authors: [
            "Xinming Wang", "Jiahao He", "Zhijian Xie", "Gansen Zhao", "Shing-Chi Cheung"
        ],
        venue: "IEEE Trans. Serv. Comput.",
        venueShort: "TSC",
        tags: [
            "Blockchain", "Smart Contracts", "Program Analysis", "Security"
        ],
        abstract: `
Ethereum smart contracts are programs that can be collectively executed by a network of mutually untrusted nodes. Smart contracts handle and transfer assets of values, offering strong incentives for malicious attacks. Intrusion attacks are a popular type of malicious attacks. In this article, we propose ContractGuard, the first intrusion detection system (IDS) to defend Ethereum smart contracts against such attacks. Like IDSs for conventional programs, ContractGuard detects intrusion attempts as abnormal control flow. However, existing IDS techniques/tools are inapplicable to Ethereum smart contracts due to Ethereum's decentralized nature and its highly restrictive execution environment. To address these issues, we design ContractGuard by embedding it in the contracts to profile context-tagged acyclic paths, and optimizing it under the Ethereum gas-oriented performance model. The main goal is to minimize the overheads, to which the users will be extremely sensitive since the cost needs to be paid upfront in digital concurrency. Empirical investigation using real-life contracts deployed in the Ethereum mainnet shows that on average, ContractGuard only adds to 36.14 percent of the deployment overhead and 28.27 percent of the runtime overhead. Furthermore, we conducted controlled experiments and show that ContractGuard successfully guard against attacks on all real-world vulnerabilities and 83 percent of the seeded vulnerabilities.
        `,
        projectUrl: "",
        paperUrl: "",
        slidesUrl: "",
        bibtex: `
            @article{DBLP:journals/tsc/WangHXZC20,
  author    = {Xinming Wang and
               Jiahao He and
               Zhijian Xie and
               Gansen Zhao and
               Shing{-}Chi Cheung},
  title     = {ContractGuard: Defend Ethereum Smart Contracts with Embedded Intrusion
               Detection},
  journal   = {{IEEE} Trans. Serv. Comput.},
  volume    = {13},
  number    = {2},
  pages     = {314--328},
  year      = {2020},
  url       = {https://doi.org/10.1109/TSC.2019.2949561},
  doi       = {10.1109/TSC.2019.2949561},
  timestamp = {Fri, 22 May 2020 21:56:08 +0200},
  biburl    = {https://dblp.org/rec/journals/tsc/WangHXZC20.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
            }
        `
    },
    {
        title: "Detecting numerical bugs in neural network architectures",
        date: "2020",
        authors: [
            "Yuhao Zhang", "Luyao Ren", "Liqian Chen", "Yingfei Xiong", "Shing-Chi Cheung", "Tao Xie"
        ],
        venue: "Proceedings of the 28th ACM Joint European SoftwareEngineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE ’20)",
        venueShort: "ESEC/FSE",
        tags: [
            "Neural Networks", "Formal Software Verification", "Program Analysis"
        ],
        abstract: `
Detecting bugs in deep learning software at the architecture level provides additional benefits that detecting bugs at the model level does not provide. This paper makes the first attempt to conduct static analysis for detecting numerical bugs at the architecture level. We propose a static analysis approach for detecting numerical bugs in neural architectures based on abstract interpretation. Our approach mainly comprises two kinds of abstraction techniques, i.e., one for tensors and one for numerical values. Moreover, to scale up while maintaining adequate detection precision, we propose two abstraction techniques: tensor partitioning and (elementwise) affine relation analysis to abstract tensors and numerical values, respectively. We realize the combination scheme of tensor partitioning and affine relation analysis (together with interval analysis) as DEBAR, and evaluate it on two datasets: neural architectures with known bugs (collected from existing studies) and real-world neural architectures. The evaluation results show that DEBAR outperforms other tensor and numerical abstraction techniques on accuracy without losing scalability. DEBAR successfully detects all known numerical bugs with no false positives within 1.7–2.3 seconds per architecture. On the real-world architectures, DEBAR reports 529 warnings within 2.6–135.4 seconds per architecture, where 299 warnings are true positives.
        `,
        projectUrl: "",
        paperUrl: "",
        slidesUrl: "",
        bibtex: `
            @inproceedings{DBLP:conf/sigsoft/ZhangRC0C020,
  author    = {Yuhao Zhang and
               Luyao Ren and
               Liqian Chen and
               Yingfei Xiong and
               Shing{-}Chi Cheung and
               Tao Xie},
  editor    = {Prem Devanbu and
               Myra B. Cohen and
               Thomas Zimmermann},
  title     = {Detecting numerical bugs in neural network architectures},
  booktitle = {{ESEC/FSE} '20: 28th {ACM} Joint European Software Engineering Conference
               and Symposium on the Foundations of Software Engineering, Virtual
               Event, USA, November 8-13, 2020},
  pages     = {826--837},
  publisher = {{ACM}},
  year      = {2020},
  url       = {https://doi.org/10.1145/3368089.3409720},
  doi       = {10.1145/3368089.3409720},
  timestamp = {Tue, 10 Nov 2020 10:58:23 +0100},
  biburl    = {https://dblp.org/rec/conf/sigsoft/ZhangRC0C020.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}
        `
    }
]