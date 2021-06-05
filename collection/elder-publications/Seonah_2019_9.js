module.exports = [
  {
    "title": "Automatic Detection and Update Suggestion for Outdated API Names in Documentation",
    "date": "2019",
    "authors": [
      "Seonah Lee", "Rongxin Wu", "Shing-Chi Cheung", "Sungwon Kang"
    ],
    "venue": "IEEE Transactions on Software Engineering 2019",
    "venueShort": "TSE",
    "tags": [],
    "abstract": `
    Application programming interfaces (APIs) continually evolve to meet ever-changing user needs, and documentation provides an authoritative reference for their usage. However, API documentation is commonly outdated because nearly all of the associated updates are performed manually. Such outdated documentation, especially with regard to API names, causes major software development issues. In this paper, we propose a method for automatically updating outdated API names in API documentation. Our insight is that API updates in documentation can be derived from API implementation changes between code revisions. To evaluate the proposed method, we applied it to four open source projects. Our evaluation results show that our method, FreshDoc, detects outdated API names in API documentation with 48% higher accuracy than the existing state-of-the-art methods do. Moreover, when we checked the updates suggested by FreshDoc against the developers? manual updates in the revised documentation, FreshDoc addressed 82% of the outdated names. When we reported 40 outdated API names found by FreshDoc via issue tracking systems, developers accepted 75% of the suggestions. These evaluation results indicate that FreshDoc can be used as a practical method for the detection and updating of API names in the associated documentation.
    `,
    "paperUrl": "materials/TSE19-lee.pdf",
    
    
    "bibtex": `
@article{lee2019automatic,
  title={Automatic Detection and Update Suggestion for Outdated API Names in Documentation},
  author={Lee, Seonah and Wu, Rongxin and Cheung, Shing-Chi and Kang, Sungwon},
  journal={IEEE Transactions on Software Engineering},
  year={2019},
  publisher={IEEE}
}
    `
  }
]