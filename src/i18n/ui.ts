export const languages = {
  en: "English",
  km: "Khmer",
};

export type Language = keyof typeof languages;
export const defaultLang = "en";
export const showDefaultLang = true;
export const ui: Record<string, Record<string, string>> = {
  en: {
    // Navigation
    "nav.applytitle": "Apply Now",
    "nav.menu": "Menu",
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.about_us": "About DSDP",
    "nav.about_team": "DSDP Chairman",
    "nav.about.question&answer": "Q&A",
    "nav.our_partners": "Our Partners",
    "nav.how_to_apply": "How to Apply",
    "nav.media_hub": "Media Hub",
    "nav.video_and_media": "Video & Media",
    "nav.news_and_events": "News & Event",
    "nav.contact": "Contact",
    // About Us
    "about.title": "About DSDP",
    "about.visionTitle": "Vision",
    "about.visionDescription":
      "As an initiative directly under the Ministry of Post and Telecommunications, the DSDP has the vision to:",
    "about.vision1":
      "Scope of implementation of the Digital Skills Development Program to respond to the demand of the digital technology labor market.",
    "about.vision2":
      "The Ministry of Post and Telecommunications (MPTC) is the competent authority responsible for leading and managing the DSDP.",
    "about.vision3":
      "The DSDP is funded by annual contributions from the Capacity Building, Research, and Development Fund for the Telecommunications and ICT sector, as well as potential contributions from other lawful sources.",
    "about.vision4":
      "The purposes of DSDP funding include, but are not limited to, the following:",
    "about.vision4.1": "Supporting the development of digital human capital.",
    "about.vision4.2":
      "Providing interest-free study financing to support digital skills development for students and professionals in both public and private institutions.",
    "about.vision4.3":
      "Covering expenses for necessary courses or training programs to support digital skills development.",
    "about.vision4.4":
      "Developing and applying digital technologies to serve education.",
    "about.vision4.5":
      "Covering operational expenses of the DSDP Management Committee.",
    "about.vision4.6":
      "Other purposes as determined by the DSDP Management Committee.",
    "about.mission.title": "Mission",
    "about.mission.description":
      "The Digital Technology Skills Development Fund (DTSDF) is committed to fulfilling its mission by:",
    "about.mission1":
      "Providing interest-free educational funding for digital technology skills development.",
    "about.mission2":
      "Promoting the development and utilization of digital technologies to support education.",
    "about.mission3":
      "Enhancing human resources by fostering knowledge and expertise in the field of digital technology.",
    "about.whatIsDsdp.title": "What is DSDP?",
    "about.whatIsDsdp.description":
      "The Digital Skills Development Program (DSDP) is a financial support initiative of the Ministry of Post and Telecommunications (MPTC). Its objective is to support the development of digital human capital in response to the needs of Cambodia’s economic, social, and digital government development.​",
    "about.benefits.title": "Benefits of DSDP",
    "about.benefits.description":
      "Successful applicants of the Digital Skills Development Program will receive the following benefits:",
    "about.benefits1":
      "Interest-free financing for tuition fees up to completion of a bachelor’s degree.",
    "about.benefits2": "One laptop computer (if required).",
    "about.benefits3": "Accommodation expenses (if required).",
    "about.benefits4": "Academic, residential, and career counseling.",
    "about.benefits5":
      "Access to quality job opportunities and high salaries in both public and private sectors.",
    "about.conditionReturnMoney.title": "Eligibility Criteria for Applicants",
    "about.conditionReturnMoney.description":
      "Applicants must meet the following criteria:",
    "about.conditionReturnMoney1": "Must be of Cambodian nationality.",
    "about.conditionReturnMoney2":
      "Must be a student who has passed the 2025 National High School Examination with an overall grade of A, B, or C.",
    "about.conditionReturnMoney3":
      "Must meet all requirements set by the selection process for enrollment at the above-mentioned higher education institutions.",
    "about.conditionReturnMoney4": "Must pass an examination and/or interview.",
    "about.conditionReturnMoney5":
      "Students from disadvantaged backgrounds, rural and remote areas, those with disabilities, and female students are strongly encouraged.",
    "about.howToReturnMoney.title": "Repayment Method",
    "about.howToReturnMoney.description": "According to the DSDP agreement:",
    "about.howToReturnMoney1":
      "Students must repay MPTC the total amount of financial support received through DSDP after completing their studies, once they are employed and earn a monthly salary of at least USD 500. Repayment must be made monthly, at a minimum of 20% of their monthly salary, to sustain the continuity of DSDP for future Cambodian students and to strengthen the sense of responsibility toward their education. By this principle, students agree that their future public institution or private enterprise employer will deduct and transfer at least 20% of their monthly salary to MPTC through DSDP. The detailed conditions of repayment will be established in a separate agreement.",
    "about.howToReturnMoney2":
      "Repayment will be implemented: (a) Under a tripartite agreement between the student, their future employer, and a representative of MPTC and (b) On a monthly basis, starting from the time the student receives their first salary until the total amount of financial support received is fully repaid.",
    "about.howToReturnMoney3":
      "In cases where, after graduation, a student earns a sufficiently high salary, they may request their employer to repay more than the minimum 20% of their monthly salary to MPTC through DSDP, with prior notification to MPTC.",
    "about.howToReturnMoney4":
      "Students are also encouraged to contribute to the DSDP in other ways, such as financial donations, technical support, knowledge sharing with future DSDP students, teaching digital subjects within their expertise, or volunteering with the program.",
    "about.howToReturnMoney5":
      "If a student earns less than USD 500 per month after graduation, DSDP will allow a maximum grace period of 3 years for repayment. However, starting from the 37th month after graduation, regardless of employment status, the student must repay at least USD 100 per month until the total amount is fully repaid. This will also be implemented (a) Under a tripartite agreement between the student, their guardian, and a representative of MPTC; and (b) On a monthly basis, starting from the 37th month after graduation until the total support amount received is fully repaid.",

    //About Team
    "about.team.title": "Chairman of D.S.D.P.",
    "about.team.name": "H.E. VANDETH CHEA",
    "about.team.position": "Minister of Post and Telecommunications",
    "about.team.ministry": "(M.P.T.C.)",
    "about.team.description1":
      "In its effort to promote the development of digital human capital and to contribute to the implementation of Strategic Goal 3 and Strategic Goal 7 of the Cambodia Digital Government Policy 2022–2035, the Ministry of Post and Telecommunications has established a new initiative — the <strong>Digital Skills Development Program (D.S.D.P.)</strong>. This program enables students with financial difficulties to apply for interest-free educational funding to cover tuition fees at partner higher education institutions. Graduates who benefit from this support are required to repay <strong>20% of their monthly salary</strong> once they enter the workforce and earn a minimum of <strong>USD 500 per month</strong>, ensuring the program’s sustainability for future generations of students. To guarantee efficiency and accountability, the Ministry has also created a <strong>D.S.D.P. Management Committee</strong> chaired directly by myself, with a Secretariat serving as the administrative and technical arm responsible for day-to-day coordination. The education sector plays a vital role in driving digital transformation, and in this regard, the collaboration between the Ministry of Post and Telecommunications and six higher education institutions stands as a new milestone in building and developing Cambodia’s digital human capital. This partnership reflects the Royal Government’s vision to strengthen human resource capacity and reaffirms the Ministry’s ongoing commitment to fostering a robust digital ecosystem that supports nationwide digital transformation.",
    "about.team.description2":
      "I am firmly confident that the <strong>Digital Skills Development Program (D.S.D.P.)</strong> will achieve great success and produce a new generation of skilled digital human resources, who will be an active driving force in advancing Cambodia’s digital economy and society, moving towards the <strong>Cambodia 2050 Vision</strong> under the wise and dynamic leadership of <strong>Samdech Moha Borvor Thipadei Hun Manet, Prime Minister of the Kingdom of Cambodia.</strong>",

    // contact-team
    "contact.team.title":
      "Please get in touch with our supporters for additional details by Phone number ",

    // FAQ
    "qa.btn.contact": "Contact us",
    "qa.title.1": "Learn More About the DSDP",
    "qa.title.2":
      "If you have questions regarding of the Digital Skills Development Program (DSDP), please refer to the frequently asked questions below. If your inquiry is not addressed, feel free to contact the DSDP team through our official contact page.",
    "qa.title.3": "Frequently asked questions",
    "qa.title.4":
      "For more details or inquiries about DSDP, click the 'Details' or 'Contact us' button below.",
    "qa.question.1": "What is the DSDP Program?",
    "qa.question.2":
      "Which digital-related fields are eligible for funding under the DSDP?",
    "qa.question.3":
      "What are the eligibility criteria applicants must meet before applying for financial support from the DSDP?",
    "qa.question.4":
      "What is the procedure for completing the application form?",
    "qa.question.5":
      "How will applicants be informed of the application outcome?",
    "qa.question.6":
      "When are candidates required to begin repayment to the DSDP?",
    "qa.question.7":
      "What is the process for repaying the support received from the DSDP?",
    "qa.answer.1":
      "The Digital Skills Development Program (DSDP) is a financial support initiative of the Ministry of Post and Telecommunications aimed at supporting the development of digital human capital to meet the needs of Cambodia’s economic, social, and digital government development.",
    "qa.answer.2":
      "Applicants may choose from DSDP’s partner institutions and programs, including:",
    "qa.answer.3": "Applicants must meet the following criteria:",
    "qa.answer.4":
      "Applicants must complete the online application form via Form Kh (in process).",
    "qa.answer.5":
      "Once selected by the program, the DSDP Secretariat will contact students for an in-person interview and confirm acceptance of the interest-free financial support.",
    "qa.answer.6": "According to the DSDP agreement:",

    //Hero Carousel
    "home.hero.title":
      "The Ministry of Post and Telecommunications (MPTC) has established the “Digital Skills Development Program” (DSDP) to support the development of digital human capital.",
    "home.hero.description":
      "The program provides interest-free study financing, student counseling, accommodation support, collaboration with higher education institutions and relevant stakeholders, and/or the development and use of digital technologies to serve education.",
    "home.hero.somdach":
      "Somdach Hun Manet presides over the opening ceremony of the Digital Government Forum and Cambodia-International Digital Government and Technology Exhibition",
    "home.hero.somdach.description":
      "Phnom Penh: On March 11, 2024, Somdach, Hun Manet, presided over the opening ceremony of the Digital Government Forum and the Cambodia-International Digital Government and Technology Exhibition. During this event, His Majesty visited the exhibition showcasing community technology centers and digital skills development programs by the Ministry of Posts and Telecommunications. This initiative aims to enhance digital capabilities among civil servants and citizens, reducing the digital divide.",
    "btn.moredetails": "More Details",
    //Apply Step
    "applyStep.step1.title": "Step 1: Register",
    "applyStep.title.1": "Simple Steps to Apply",
    "applyStep.title.2": "Apply for project funding from",
    "applyStep.title.3": "DSDP",
    "applyStep.title.4":
      "High school graduates, university students, or civil servants",
    "applyStep.title.5":
      "can apply for project funding with us by following these simple steps:",
    "applyStep.title.6":
      "Applicants must complete the online application form via www.dsdp.gov.kh/registration within the specified deadline.",
    "applyStep.title.7":
      "For more information, please contact 123 or email info@dsdp.gov.kh",
    "applyStep.button.title": "About us",
    "event.title": "Events",
    "event.btn": "All events",
    // Event Carousel
    "home.event_1.title": "Signing Ceremony with DSDP",
    "home.event_1.description":
      "The DSDP is honored to announce to the public that, as decided by the Royal Government, the DSDP will organize the 'National Science, Technology, and Digital Day' annually. For the year 2023, it will be held at the Sokha Angkor Hotel in Siem Reap Province.",
    "home.event_2.title": "Digital Exhibition by DSDP",
    "home.event_2.description":
      "The DSDP is honored to announce to the public that, as decided by the Royal Government, the DSDP will organize the 'National Science, Technology, and Digital Day' annually. For the year 2023, it will be held at the Sokha Angkor Hotel in Siem Reap Province.",
    "home.event_3.title": "women for digital DSDP",
    "home.event_3.description":
      "The DSDP is honored to announce to the public that, as decided by the Royal Government, the DSDP will organize the 'National Science, Technology, and Digital Day' annually. For the year 2023, it will be held at the Sokha Angkor Hotel in Siem Reap Province.",
    // candidate benefits
    "home.candidate_benefits.title": "Benefits for DSDP Applicants",
    "home.candidate_benefits.description":
      "Successful candidates of the DSDP program will receive the following benefits:",
    // Partnership Section
    "home.partnership.title": "Partner Higher Education Institutions of DSDP.",
    "home.partnership.description":
      "Applicants can select from DSDP’s partner higher education institutions and eligible study programs as follows:",
    "home.partnership.box.title": "Want to become a DSDP partner?",
    "home.partnership.box.description":
      " If you or your institution is interested in becoming a partner of DSDP.",
    //Partner page
    "partner.title": "D.S.D.P. Welcomes Partner Institutions Nationwide",
    "partner.description_1": "Digital Skill Development Program (D.S.D.P.)",
    "partner.description_2": "has a mission to continuously seek and sign",
    "partner.description_3": "cooperation agreements (MOUs)",
    "partner.description_4": "with partner institutions to",
    "partner.description_5": "promote digital education",
    "partner.description_6": "We are honored to welcome",
    "partner.description_7": "higher education institutions",
    "partner.description_8": "and",
    "partner.description_9": "other organizations",
    "partner.description_10": "that have joined us as partners both",
    "partner.description_11":
      "public and private higher education institutions",
    "partner.description_12": "domestic and international,",
    "partner.description_13":
      "are invited to participate in this shared goal: ",
    "partner.description_14": "expanding cooperation",
    "partner.description_15": "in",
    "partner.description_16": "developing digital human resources",
    "partner.description_17": "to meet the growing demands of the",
    "partner.description_18": "digital technology job market",
    "partner.description_19": "in Cambodia and worldwide.",

    // Partner Box
    "partner.box.description_1": "Join",
    "partner.box.description_2": "as a partner",
    "partner.box.description_3": "with",
    "partner.box.description_4": "DSDP",
    "partner.box.description_5": "to",
    "partner.box.description_6": "Enhance excellence in digital skills",
    "partner.box.description_7": "for Cambodia’s development!",

    // University
    "Uni.description": "Training majors:",
    //RUPP
    "RUPP.title": "Royal University of Phnom Penh",
    "RUPP.major_1": "Telecommunication and Electronic Engineering",
    "RUPP.major_2": "Data Science and Engineering",
    "RUPP.major_3": "Information Technology",
    "RUPP.major_4": "Information Technology Engineering",
    //ITC
    "ITC.title": "Institute of Technology of Cambodia",
    "ITC.major_1": "Software Engineering",
    "ITC.major_2": "AI Engineering and Cybersecurity",

    // AUPP
    "AUPP.title": "American University of Phnom Penh",
    "AUPP.major_1": "Information Technology Management/Computer Science",
    "AUPP.major_2": "Information and Communication Technology",
    "AUPP.major_3": "Cybersecurity",
    "AUPP.major_4": "Artificial Intelligence",
    "AUPP.major_5": "Digital Infrastructure",
    "AUPP.major_6": "Software Development",
    "AUPP.major_7": "Data Analytics/Information Systems",
    "AUPP.major_8": "Interactive App Design and Development",

    // NUM
    "NUM.title": "National University of Management",
    "NUM.major_1": "Digital Economy",
    "NUM.major_2": "Financial Technology",
    "NUM.major_3": "Global Entrepreneurship and Innovation",
    "NUM.major_4": "Financial Technology",

    // Paragon
    "Paragon.title": "Paragon International University",
    "Paragon.major_1": "Computer Science",
    "Paragon.major_2": "Management of Information Systems",
    "Paragon.major_3": "Digital Arts and Design",

    // CADT
    "CADT.title": "Cambodia Academy of Digital Technology",
    "CADT.major_1": "Software Engineering",
    "CADT.major_2": "Data Science",
    "CADT.major_3": "e-Commerce",
    "CADT.major_4": "Telecommunications and Networking Engineering",
    "CADT.major_5": "Cybersecurity",

    // Partner About Us Button
    "partner.button.AboutUs": "Contact Us",
    //How to Apply Page V.2
    //title for how to apple page v.2
    "HowToApply.title_1": "How to Apply",
    "HowToApply.title_2": "Application Documents",
    "HowToApply.title_3": "If Selected",
    "HowToApply.title_4": "Application Deadline and Submission",
    //Description for hoqw to apply page v.2
    "HowToApply.description_1":
      "The Digital Skill Development Program (DSDP) is a financial aid initiative (not a scholarship) aimed at providing interest-free study financing to high school graduates (Grade 12) who wish to pursue a bachelor’s degree in digital-related fields but have not received a full 100% scholarship from other educational institutions.",
    "HowToApply.description_2":
      "Applicants are required to complete the online application and upload scanned copies of the following supporting documents:",
    "HowToApply.description.point_1": "A 4x6 cm photo",
    "HowToApply.description.point_2":
      "High school diploma, provisional certificate, or official Grade 12 examination results",
    "HowToApply.description.point_3":
      "National ID card, passport, or birth certificate",
    "HowToApply.description_3":
      "In the event that an applicant is selected to receive interest-free study financing, they must submit certified copies of the following documents, verified by a competent authority, or official copies containing a standard QR code that can be authenticated by the Royal Government:",
    "HowToApply.description.point_4":
      "High school diploma, provisional certificate, or official Grade 12 examination results",
    "HowToApply.description.point_5":
      "National ID card, passport, or birth certificate",
    "HowToApply.description.point_6": "Family book or residence book",
    "HowToApply.description.point_7":
      "Union membership documents (if applicable)",
    "HowToApply.description.point_8":
      "Parent(s) or guardian’s national ID card",
    "HowToApply.description_4":
      "Applicants must complete the online application form via the following link:",
    "HowToApply.description_5": "https://go.gov.kh/mptc/dsdp-registration",
    "HowToApply.description_6":
      "The application period is open from the date of this announcement until November 1, 2025.",
    "HowToApply.description_7": "For more information, please contact 123.",
    // How to Apply Page
    "howToApply.title-1": "ជំហានងាយៗនៃការដាក់ពាក្យ",
    "howToApply.title-2": "ស្នើសុំថវិកាគម្រោងរបស់ ក.អ.ជ.ឌ.",
    "howToApply.subTitle":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ផ្តល់ឱកាសដល់ សិស្ស និស្សិត និង មន្ត្រីរាជការ  ដែលបំពេញលក្ខខណ្ឌដូចខាងក្រោម ៖",
    "howToApply.studentTab": "សម្រាប់សិស្ស-និស្សិត",
    "howToApply.officerTab": "សម្រាប់មន្ត្រីរាជការ",
    "howToApply.quantity1": "ចំនួន ០១ ច្បាប់",
    "howToApply.quantity2": "ចំនួន ០២ ច្បាប់",
    // How to Apply Page (Student Criteria)
    "howToApply.student.condition1.title":
      "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    "howToApply.student.condition1.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌតម្រូវដូចខាងក្រោម ៖",
    "howToApply.student.condition1.item1": "ត្រូវមានសញ្ជាតិខ្មែរ",
    "howToApply.student.condition1.item2":
      "ទទួលបានសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល ដែលមាននិន្ទេសរួម A B ឬ C",
    "howToApply.student.condition1.item3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានជាដៃគូទាំងអស់របស់ ក.អ.ជ.ឌ.",
    "howToApply.student.condition1.item4":
      "អាចឆ្លងកាត់ការប្រលង និង/ឬ ការសម្ភាស ដែលរៀបចំដោយ ក.អ.ជ.ឌ.",
    "howToApply.student.condition1.item5":
      "ត្រូវបានលើកទឹកចិត្តចំពោះបេក្ខជនមានជីវភាពក្រីក្រមកពីជនបទដាច់ស្រយាល ជាជនមានពិការភាព ជានារី",
    "howToApply.student.condition2.title":
      "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    "howToApply.student.condition2.description":
      "បេក្ខជនត្រូវស្កេនភ្ជាប់មកជាមួយនូវឯកសារយោងនៅពេលបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញរួមមាន ៖",
    "howToApply.student.condition2.item1": "រូបថត ៤x៦ ផ្ទៃស",
    "howToApply.student.condition2.item2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល",
    "howToApply.student.condition2.item3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "howToApply.student.condition2.item4": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "howToApply.student.condition3.title":
      "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    "howToApply.student.condition3.description":
      "បេក្ខជនដែលត្រូវបានជ្រើសរើសជាប់ជាស្ថាពរត្រូវមកបង្ហាញខ្លួន និងភ្ជាប់មកជាមួយនូវឯកសារតម្រូវរួមមាន ៖",
    "howToApply.student.condition3.item1":
      "1. ជីវប្រវត្តិសង្ខេបមានបិទរូបថត(រូបថត ៤x៦ ផ្ទៃ២)",
    "howToApply.student.condition3.item2":
      "2. កិច្ចព្រមព្រៀងស្តីពីការផ្តល់ថវិកាសិក្សាសម្រាប់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "howToApply.student.condition3.item3":
      "3. លិខិតធានាអះអាងពីអាណាព្យាបាល ឬសហព័ទ្ធ",
    "howToApply.student.condition3.item4":
      "4. សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល (មានឃ្យូ.អ.កូដ ស្តង់ដា ឬបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.student.condition3.item5":
      "5. អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.student.condition3.item6": "6. សេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត",
    "howToApply.student.condition3.item7":
      "7. សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    // How to Apply Page (Officer Criteria)
    "howToApply.officer.condition1.title":
      "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    "howToApply.officer.condition1.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌតម្រូវដូចខាងក្រោម ៖",
    "howToApply.officer.condition1.item1": "ត្រូវមានសញ្ជាតិខ្មែរ",
    "howToApply.officer.condition1.item2":
      "ទទួលបានសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល ដែលមាននិន្ទេសរួម A B ឬ C",
    "howToApply.officer.condition1.item3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានជាដៃគូទាំងអស់របស់ ក.អ.ជ.ឌ.",
    "howToApply.officer.condition1.item4":
      "អាចឆ្លងកាត់ការប្រលង និង/ឬ ការសម្ភាស ដែលរៀបចំដោយ ក.អ.ជ.ឌ.",
    "howToApply.officer.condition1.item5":
      "ត្រូវបានលើកទឹកចិត្តចំពោះបេក្ខជនមានជីវភាពក្រីក្រមកពីជនបទដាច់ស្រយាល ជាជនមានពិការភាព ជានារី",
    "howToApply.officer.condition2.title":
      "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    "howToApply.officer.condition2.description":
      "បេក្ខជនត្រូវស្កេនភ្ជាប់មកជាមួយនូវឯកសារយោងនៅពេលបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញរួមមាន ៖",
    "howToApply.officer.condition2.item1": "រូបថត ៤x៦ ផ្ទៃស",
    "howToApply.officer.condition2.item2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល",
    "howToApply.officer.condition2.item3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "howToApply.officer.condition2.item4": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "howToApply.officer.condition3.title":
      "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    "howToApply.officer.condition3.description":
      "បេក្ខជនដែលត្រូវបានជ្រើសរើសជាប់ជាស្ថាពរត្រូវមកបង្ហាញខ្លួន និងភ្ជាប់មកជាមួយនូវឯកសារតម្រូវរួមមាន ៖",
    "howToApply.officer.condition3.item1":
      "1. ជីវប្រវត្តិសង្ខេបមានបិទរូបថត(រូបថត ៤x៦ ផ្ទៃ២)",
    "howToApply.officer.condition3.item2":
      "2. កិច្ចព្រមព្រៀងស្តីពីការផ្តល់ថវិកាសិក្សាសម្រាប់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "howToApply.officer.condition3.item3":
      "3. លិខិតធានាអះអាងពីអាណាព្យាបាល ឬសហព័ទ្ធ",
    "howToApply.officer.condition3.item4":
      "4. សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល (មានឃ្យូ.អ.កូដ ស្តង់ដា ឬបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.officer.condition3.item5":
      "5. អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.officer.condition3.item6": "6. សេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត",
    "howToApply.officer.condition3.item7":
      "7. សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    // Contact Page
    // Info section
    "contact.title.1": "Contact Information",
    "contact.description.1":
      "Please complete the form on the right to contact the DSDP Working Group. We will respond within 24 hours. Or contact us directly at the following phone number:",
    "contact.description.2": "123",
    "contact.description.3": "info@dsdp.gov.kh | partners@dsdp.gov.kh",
    "contact.description.4":
      "Building No. 13, Preah Monivong Boulevard, Sangkat Sra Chak, Khan Daun Penh Phnom Penh 120210, Cambodia",
    // Media Part
    "contact.title.2": "Location in Google Map",
    // News and Events Page
    "newsAndEvents.title":
      "Latest Digital Events, Both Local and International",
    "newsAndEvents.short_description":
      "Discover the latest news, announcements, and upcoming events from our programs. From student success stories to application deadlines, workshops, and informational sessions, this is where you'll find everything happening in our mission to support digital education through interest-free student loans.",
    "newsAndEvents.readmore": "Read More",
    "newsAndEvents.no_posts": "There's no News & Events at the moment.",
    "newsAndEvents.sub_title": "News & Events",
    // Video and Media Page
    "video-media.title": "Videos & Media",
    "video-media.description":
      "Enjoy our Digital Skill Development Program (DSDP) videos! Join us in fostering digital literacy and skills among students, preparing them for the digital age.",
    // CTA Buttons
    "btn.previous": "Previous",
    "btn.next": "Next",
    // 404 Page
    "404.title.1": "404",
    "404.description.1":
      "Sorry, The page you're looking for could not be found.",
    "404.description.2":
      "It seems that the page you're trying to access doesn't exist or has been moved.",
    "404.description.3": "Please check the Url once again",
    "404.description.4": "Go back to Homepage",
    // Footer
    "footer.title.1": "ABOUT US",
    "footer.description.1": "About DSDP",
    "footer.description.2": "DSDP Chairman",
    "footer.description.3": "Q&A",
    "footer.title.2": "PROGRAMS",
    "footer.description.4": "How to apply",
    "footer.description.5": "For students",
    "footer.description.6": "For officer",
    "footer.description.7": "For partnership",
    "footer.title.3": "USEFUL LINKS",
    "footer.description.8": "Ministry of Posts and Telecommunications",
    "footer.description.9": "Cambodia Academy of Digital Technology",
    "footer.description.10": "Application Link",
    "footer.title.4": "GET IN TOUCH",
    "footer.description.11":
      "Building No. 13,, Preah Monivong Boulevard, Sangkat Srachak, Khan Daun Penh, Phnom Penh, Cambodia, 120210",
    "footer.description.12": "123",
    "footer.description.13": "info@dsdp.gov.kh | partners@dsdp.gov.kh",
    "footer.description.14": "Copyright",
    "footer.description.15": "All rights reserved DSDP.GOV.KH",
    "footer.description.16": "Privacy Policy",
    "footer.description.17": "Term of Use",
    "footer.description.18": "Legal",
    "footer.description.19": "Sitemap",

    // under-construction
    "under-construction.title": "Page is under construction",
  },

  km: {
    // Navigation
    "nav.applytitle": "ពាក្យស្នើសុំ",
    "nav.menu": "បញ្ជីមាតិកា",
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីពួកយើង",
    "nav.about_us": "អំពី ក.អ.ជ.ឌ.",
    "nav.about_team": "ប្រធាន​ ក.អ.ជ.ឌ.",
    "nav.about.question&answer": "សំណួរ​និងចម្លើយ",
    "nav.our_partners": "ដៃគូរបស់យើង",
    "nav.how_to_apply": "របៀបដាក់ពាក្យ",
    "nav.media_hub": "មជ្ឈមណ្ឌលព័ត៌មាន",
    "nav.video_and_media": "វីដេអូ និង ការផ្សព្វផ្សាយ",
    "nav.news_and_events": "ព័ត៌មាន និង ​ព្រឹត្តិការណ៍",
    "nav.contact": "ទំនាក់ទំនង",
    // About Us
    "about.title": "អំពី ក.អ.ជ.ឌ.",
    "about.visionTitle": "ចក្ខុវិស័យ",
    "about.visionDescription":
      "ក្នុងនាមជាសេនាធិកាផ្ទាល់របស់ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ ក.អ.ជ.ឌ. មានចក្ខុវិស័យក្នុងការ៖",
    "about.vision1":
      "វិសាលភាពអនុវត្តចំពោះកម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ដើម្បីឆ្លើយតបទៅនឹងតម្រូវការទីផ្សារជំនាញបច្ចេកវិទ្យាឌីជីថល។",
    "about.vision2":
      "ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ ដែលសរសេរកាត់ថា “ក.ប.ទ. ” ជាស្ថាប័នមានសមត្ថកិច្ចលើការដឹកនាំនិងគ្រប់គ្រង ក.អ.ជ.ឌ. ។",
    "about.vision3":
      "ក.អ.ជ.ឌ. មានធនធានពីវិភាគទានប្រចាំឆ្នាំពីមូលនិធិនៃការកសាងសមត្ថភាព និងការស្រាវជ្រាវនិងការអភិវឌ្ឍលើវិស័យទូរគមនាគមន៍ និងបច្ចេកវិទ្យាគមនាគមន៍និងព័ត៌មាន (ស.អ.) និងអាចមានវិភាគទានពីប្រភពស្របច្បាប់ផ្សេងៗទៀត។",
    "about.vision4":
      "កម្មវត្ថុនៃការប្រើប្រាស់ថវិកា ក.អ.ជ.ឌ. មានជាអាទិ៍ ដូចខាងក្រោម៖",
    "about.vision4.1": "ការគាំទ្រដល់ដំណើរការអភិវឌ្ឍមូលធនមនុស្សឌីជីថល។",
    "about.vision4.2":
      "ការផ្តល់ថវិកាសិក្សាដោយមិនគិតការប្រាក់ សម្រាប់ការអភិវឌ្ឍជំនាញឌីជីថលដល់សិស្ស និស្សិត និងអ្នកបម្រើការងារនៅស្ថាប័នសាធារណៈនិងឯកជន។",
    "about.vision4.3":
      "ការចំណាយលើការរៀបចំវគ្គសិក្សាឬវគ្គបណ្តុះបណ្តាលចាំបាច់នានា ដើម្បីគាំទ្រដល់ដំណើរការអភិវឌ្ឍជំនាញឌីជីថល។",
    "about.vision4.4":
      "ការអភិវឌ្ឍនិងការប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថលសម្រាប់បម្រើដល់ការអប់រំ។",
    "about.vision4.5":
      "ការចំណាយសម្រាប់ដំណើរការការងាររបស់គណៈគ្រប់គ្រង ក.អ.ជ.ឌ.។",
    "about.vision4.6": "កម្មវត្ថុផ្សេងៗទៀតដែលកំណត់ដោយគណៈគ្រប់គ្រង ក.អ.ជ.ឌ.។",
    "about.mission.title": "បេសកកម្ម",
    "about.mission.description":
      "ក.អ.ជ.ឌ. បានប្តេជ្ញាបំពេញនូវបេសកកម្មរបស់ខ្លួនយ៉ាងពេញទំហឹងជាអាទិ៍គឺ៖",
    "about.mission1":
      "ផ្តល់ថវិកាសិក្សាដោយមិនគិតការប្រាក់លើជំនាញបច្ចេកវិទ្យាឌីជីថល",
    "about.mission2":
      "អភិវឌ្ឍន៍ និងប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថលសម្រាប់បម្រើដល់ការអប់រំ និង",
    "about.mission3": "បង្កើនធនធានមនុស្សដែលមានចំណេះដឹងផ្នែកបច្ចេកវិទ្យាឌីជីថល",
    "about.whatIsDsdp.title": "អ្វីទៅជា (ក.អ.ជ.ឌ.)?",
    "about.whatIsDsdp.description":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ឌ.) ជាកម្មវិធីជំនួយផ្នែកហិរញ្ញវត្ថុរបស់ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ក្នុងគោលដៅគាំទ្រដល់ដំណើរការអភិវឌ្ឍមូលធនមនុស្សឌីជីថល ឆ្លើយតបទៅនឹងតម្រូវការ នៃការអភិវឌ្ឍសេដ្ឋកិច្ច សង្គម និងរដ្ឋាភិបាលឌីជីថល។​",
    "about.benefits.title": "អត្ថប្រយោជន៍នៃ ក.អ.ជ.ឌ.",
    "about.benefits.description":
      "បេក្ខជនជ័យលាភីនៃកម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល នឹងទទួលបានអត្ថប្រយោជន៍ ដូចខាងក្រោម៖",
    "about.benefits1":
      "ថវិកាសិក្សាដោយមិនគិតការប្រាក់ ដើម្បីបង់ថ្លៃសិក្សារហូតដល់ចប់ថ្នាក់បរិញ្ញាបត្រ",
    "about.benefits2": "កុំព្យូទ័រយួរដៃមួយគ្រឿង (ប្រសិនបើមានតម្រូវការ)",
    "about.benefits3": "ថ្លៃស្នាក់នៅ (ប្រសិនបើមានតម្រូវការ)",
    "about.benefits4":
      "ការប្រឹក្សាយោបល់អំពីការសិក្សា លើការស្នាក់នៅ និងការអភិវឌ្ឍអាជីប",
    "about.benefits5":
      "ឱកាសការងារល្អ និងប្រាក់បៀវត្សរ៍ខ្ពស់ក្នុងវិស័យសាធារណៈនិងឯកជន។",
    "about.conditionReturnMoney.title": "លក្ខខណ្ឌសម្រាប់បេក្ខជនដែលខ្ចីប្រាក់",
    "about.conditionReturnMoney.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌ ដូចខាងក្រោម៖",
    "about.conditionReturnMoney1": "មានសញ្ជាតិខ្មែរ",
    "about.conditionReturnMoney2":
      "ជាសិស្សដែលប្រឡងជាប់សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិឆ្នាំសិក្សា២០២៥ ដែលមាននិទ្ទេសរួម A B ឬ C",
    "about.conditionReturnMoney3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានឧត្ដមសិក្សាខាងលើ",
    "about.conditionReturnMoney4": "ឆ្លងកាត់ការប្រឡង និង/ឬការសម្ភាសន៍",
    "about.conditionReturnMoney5":
      "ជាសិស្សដែលមានជីវភាពក្រីក្រ មកពីជនបទដាច់ស្រយាល ជនមានពិការភាព ឬសិស្សនារី ត្រូវបានលើកទឹកចិត្ត។",
    "about.howToReturnMoney.title": "របៀបសងប្រាក់",
    "about.howToReturnMoney.description":
      "យោងទៅលើកិច្ចព្រមព្រៀងរបស់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថលដូចខាងក្រោម៖",
    "about.howToReturnMoney1":
      "និស្សិត ត្រូវទូទាត់ជូន ក.ប.ទ. វិញនូវចំនួនថវិកាសរុបដែលបានទទួលតាមរយៈ ក.អ.ជ.ឌ. បន្ទាប់ពីបញ្ចប់ការសិក្សា និងពេលទទួលបានការងារធ្វើ ហើយទទួលបានប្រាក់បៀវត្សរ៍ចាប់ពី ៥០០ (ប្រាំរយ) ដុល្លារអាមេរិក ដោយត្រូវទូទាត់បន្តបន្ទាប់ជារៀងរាល់ខែនូវថវិកាយ៉ាងតិចចំនួន ២០% (ម្ភៃភាគរយ) នៃបៀវត្សរ៍ប្រចាំខែរបស់ខ្លួន ដើម្បីទ្រទ្រង់និរន្តរភាពនៃ ក.អ.ជ.ឌ. សម្រាប់និស្សិតកម្ពុជាបន្តបន្ទាប់នាពេលអនាគត និងក្នុងគោលបំណងពង្រឹងទំនួលខុសត្រូវលើការសិក្សារបស់ និស្សិត។ ក្នុងស្មារតីនេះ និស្សិត យល់ព្រម ឱ្យស្ថាប័នសាធារណៈ ឬសហគ្រាសឯកជនដែលខ្លួននឹងបម្រើការជូនបន្ទាប់ពីបញ្ចប់ការសិក្សា ទូទាត់ថវិកាយ៉ាងតិចចំនួន ២០% (ម្ភៃភាគរយ) នៃប្រាក់បៀវត្សរ៍ប្រចាំខែនាពេលអនាគតរបស់សាមី និស្សិត ជូន ក.ប.ទ. តាមរយៈ ក.អ.ជ.ឌ.។ លក្ខខណ្ឌលម្អិតនៃការទូទាត់ថវិកាជូន ក.ប.ទ. តាមរយៈ ក.អ.ជ.ឌ. វិញនឹងត្រូវរៀបចំឡើងតាមរយៈកិច្ចព្រមព្រៀងដាច់ដោយឡែកផ្សេងទៀត។",
    "about.howToReturnMoney2":
      "ការទូទាត់ថវិកាខាងលើនេះនឹងត្រូវអនុវត្ត៖ (១) ក្រោមកិច្ចព្រមព្រៀងត្រីភាគីរវាង និស្សិត អនាគតនិយោជករបស់សាមី និស្សិត និងតំណាងរបស់ ក.ប.ទ. និង (២) ជារៀងរាល់ខែដោយគិត ចាប់ពីពេលសាមី និស្សិត ទទួលបានប្រាក់បៀវត្សរ៍ដំបូង រហូតដល់ថវិកាទូទាត់សរុបស្មើនឹងចំនួនថវិកាសរុបដែលសាមី និស្សិត ទទួលបានពី ក.ប.ទ. តាមរយៈ ក.អ.ជ.ឌ.។",
    "about.howToReturnMoney3":
      "ក្នុងករណីក្រោយពីបញ្ចប់ការសិក្សា និស្សិត ទទួលបានប្រាក់បៀវត្សរ៍ប្រចាំខែក្នុងកម្រិតខ្ពស់សមរម្យសាមី និស្សិត អាចស្នើឱ្យស្ថាប័ន ឬសហគ្រាសដែលខ្លួននឹងបម្រើការជូនឱ្យទូទាត់ថវិកា ដើម្បីសងជូន ក.ប.ទ. វិញលើសពីចំនួន ២០% នៃប្រាក់បៀវត្សរ៍ប្រចាំខែនាពេលអនាគតរបស់ខ្លួនបានដោយជូនដំណឹងដល់ ក.ប.ទ. ឱ្យបានជ្រាបផងដែរ។",
    "about.howToReturnMoney4":
      "និស្សិត ក៏ត្រូវបានលើកទឹកចិត្តឱ្យចូលរួមទ្រទ្រង់ ក.អ.ជ.ឌ. ក្រោមរូបភាពបន្ថែមផ្សេងទៀត ជាអាទិ៍ ជំនួយសប្បុរសជាថវិកា និងជំនួយបច្ចេកទេស រួមមានការចែករំលែកចំណេះដឹងដល់និស្សិត ក.អ.ជ.ឌ. ជំនាន់ក្រោយៗ ឬការបង្រៀនមុខវិជ្ជាឌីជីថលណាមួយដែលជាជំនាញរបស់ខ្លួន ឬការធ្វើការជាបុគ្គលិកស្ម័គ្រចិត្តរបស់កម្មវិធី។",
    "about.howToReturnMoney5":
      "ក្នុងករណី និស្សិត ទទួលបានបៀវត្សរ៍ប្រចាំខែក្រោម ៥០០ (ប្រាំរយ) ដុល្លារអាម៉េរិក ក.អ.ជ.ឌ. នឹងពន្យាពេលជូន និស្សិត លើការទូទាត់ថវិកាសងត្រឡប់មក ក.ប.ទ. ក្នុងរយៈពេលជាអតិបរមារត្រឹម ៣ឆ្នាំ បន្ទាប់ពីបញ្ចប់ការសិក្សា។ ប៉ុន្តែចាប់ពីខែទី៣៧ ក្រោយពី និស្សិត បញ្ចប់ការសិក្សា ទោះបីជា និស្សិត មិនទាន់ទទួលបានការងារធ្វើក៏ដោយ និស្សិត មានកាតព្វកិច្ចទូទាត់ថវិកាបន្តបន្ទាប់ជារៀងរាល់ខែចំនួន ១០០ (មួយរយ)ដុល្លារអាម៉េរិក ជូន ក.ប.ទ. ជាកំហិត។ ការទូទាត់ថវិកាខាងលើនេះនឹងត្រូវអនុវត្ត៖ (១) ក្រោមកិច្ចព្រមព្រៀងត្រីភាគីរវាង និស្សិត អាណាព្យាបាលរបស់ និស្សិត និងតំណាងរបស់ ក.ប.ទ. និង (២) ជារៀងរាល់ខែដោយគិតចាប់ពីខែទី៣៧ ក្រោយពីសាមី និស្សិត បញ្ចប់ការសិក្សារហូតដល់ថវិកាទូទាត់សរុបស្មើនឹងចំនួនថវិកាសរុបដែលសាមី និស្សិត ទទួលបានពី ក.ប.ទ. តាមរយៈ ក.អ.ជ.ឌ.។",
    //About Team
    "about.team.title": "ប្រធាន ក.អ.ជ.ឌ.",
    "about.team.name": "ឯកឧត្តម ជា វ៉ាន់ដេត",
    "about.team.position": "រដ្ឋមន្ត្រីក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍",
    "about.team.ministry": "(ក.ប.ទ.)",
    "about.team.description1":
      "ក្នុងកិច្ចខិតខំក្នុងការលើកសមត្ថភាព ធនធានមនុស្សឌីជីថល និងដើម្បីចូលរួមអនុវត្តគោលដៅយុទ្ធសាស្ត្រលេខ ៣ និង គោលដៅយុទ្ធសាស្ត្រលេខ ៧ នៃ គោលនយោបាយរដ្ឋាភិបាលឌីជីថលកម្ពុជា ២០២២–២០៣៥, ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍បានបង្កើតឧបករណ៍ថ្មីមួយ — <strong>កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ខ.)</strong>។ កម្មវិធីនេះអនុញ្ញាតឱ្យសិស្សដែលមានភាពលំបាកផ្នែកហិរញ្ញវត្ថុអាចស្នើសុំ ថវិកាសិក្សាដោយគ្មានការប្រាក់ ដើម្បីទូទាត់ថ្លៃសិក្សានៅ គ្រឹះស្ថានឧត្តមសិក្សាដៃគូ។ សិស្សដែលទទួលបានការគាំទ្រនេះត្រូវតែសងវិញ <strong>២០% នៃប្រាក់ខែប្រចាំខែ</strong> ពេលចូលធ្វើការនិងទទួលបានប្រាក់ខែយ៉ាងហោចណាស់ <strong>៥០០ ដុល្លារសហរដ្ឋអាមេរិក ក្នុងមួយខែ</strong>, ដើម្បីធានាប្រសិទ្ធភាពនៃកម្មវិធីសម្រាប់ជំនាន់ក្រោយ។ ដើម្បីធានាការប្រតិបត្តិមានប្រសិទ្ធភាព និងទទួលខុសត្រូវ, ក្រសួងបានបង្កើត <strong>គណៈកម្មាធិការគ្រប់គ្រង (ក.អ.ជ.ខ.)</strong> ដែលខ្ញុំបន្តផ្ទាល់ជាប្រធាន, ជាមួយ លេខាធិការដ្ឋាន ដើម្បីសម្របសម្រួលការងារប្រចាំថ្ងៃ។ វិស័យអប់រំមានតួនាទីសំខាន់ក្នុងការជំរុញ បម្លែងឌីជីថល, ហើយការសហប្រតិបត្តិរវាងក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ និង គ្រឹះស្ថានឧត្តមសិក្សា ៦ ស្ថាប័ន គឺជាសក្ខីភាពថ្មីមួយក្នុងការសាងសង់ និងអភិវឌ្ឍ ធនធានមនុស្សឌីជីថលកម្ពុជា។ គំនិតនេះសម្របសម្រួលនឹង ចក្ខុវិស័យរដ្ឋាភិបាលកម្ពុជា ក្នុងការលើកសមត្ថភាពធនធានមនុស្ស និងបញ្ជាក់ពីកិច្ចខិតខំរបស់ក្រសួងក្នុងការបង្កើត ប្រព័ន្ធអេកូឡូស៊ីឌីជីថលរឹងមាំ ដែលគាំទ្រការបម្លែងឌីជីថលទូទាំងប្រទេស។",
    "about.team.description2":
      "ខ្ញុំមានជំនឿជាក់ល្អថា <strong>កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ខ.)</strong> នឹងទទួលបានជោគជ័យយ៉ាងល្អ និងបង្កើត មនុស្សឌីជីថលជំនាញខ្ពស់ជំនាន់ថ្មី, ដែលជាកម្លាំងសកម្មក្នុងការលើកសមត្ថភាព សេដ្ឋកិច្ច និងសង្គមឌីជីថលកម្ពុជា, ទៅកាន់ <strong>Cambodia 2050 Vision</strong> តាមការដឹកនាំ <strong>សម្តេចមហាបវរធិបតី ហ៊ុន ម៉ាណែត នាយករដ្ឋមន្ត្រី ព្រះរាជាណាចក្រកម្ពុជា</strong>។",

    // contact-supporter
    "contact.team.title":
      "សូមទាក់ទងមក ពួកយើងសម្រាប់ព័ត៌មានលម្អិតបន្ថែមតាមរយៈលេខ ",

    // FAQ
    "qa.btn.contact": "ទំនាក់ទំនង​​យើងខ្ញុំ",
    "qa.title.1": "ស្វែងយល់បន្ថែមអំពី ក.អ.ជ.ឌ.!",
    "qa.title.2":
      "បើអ្នកមានចម្ងល់អំពីកម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល អ្នកអាចស្វែងយល់តាមរយៈសំណួរ-ចម្លើយខាងក្រោមនេះ។ ករណីអ្នកមិនទាន់ច្បាស់ អ្នកអាចទំនាក់ទំនងមកក្រុមការងារ ក.អ.ជ.ឌ. តាមរយៈទំព័រទំនាក់ទំនងរបស់យើងខ្ញុំ!",
    "qa.title.3": "សំណួរដែលច្រើនសួរជាញឹកញាប់៖",
    "qa.title.4":
      "ព័ត៌មានលម្អិតទាក់ទង ក.អ.ជ.ឌ. ករណីអ្នកនៅតែមិនទាន់យល់ច្បាស់ អ្នកអាចចុចប៊ូតុងព័ត៌មានលម្អិតឬ ប៊ូតុងទាក់ទង ក.អ.ជ.ឌ. ខាងក្រោមនេះ",
    "qa.question.1": "តើកម្មវិធី ក.អ.ជ.ឌ. គឺជាអ្វី?",
    "qa.question.2":
      "តើមុខជំនាញឌីជីថលណាខ្លះ ដែលបេក្ខជនអាចដាក់ពាក្យ ស្នើសុំថវិកាយកទៅរៀនបាន?",
    "qa.question.3":
      "តើបេក្ខជនត្រូវបំពេញលក្ខខណ្ឌអ្វីខ្លះ មុននឹងធ្វើការដាក់ពាក្យ ស្នើសុំថវិកាពី ក.អ.ជ.ឌ.?",
    "qa.question.4": "តើត្រូវបំពេញពាក្យសុំដោយរបៀបណា?",
    "qa.question.5": "តើធ្វើដូចម្តេចទើបដឹងលទ្ធផល ជាប់ ឬធ្លាក់?",
    "qa.question.6": "តើបេក្ខជនត្រូវសងថវិកាទៅ ក.អ.ជ.ឌ. វិញនៅពេលណា?",
    "qa.question.7": "តើបេក្ខជនសងប្រាក់ទៅ ក.អ.ជ.ឌ.វិញដូចម្តេច?",
    "qa.answer.1":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ឌ.) ជាកម្មវិធីជំនួយផ្នែកហិរញ្ញវត្ថុរបស់ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ក្នុងគោលដៅគាំទ្រដល់ដំណើរការអភិវឌ្ឍមូលធនមនុស្សឌីជីថល ឆ្លើយតបទៅនឹងតម្រូវការ នៃការអភិវឌ្ឍសេដ្ឋកិច្ច សង្គម និងរដ្ឋាភិបាលឌីជីថល។",
    "qa.answer.2":
      "បេក្ខជនអាចជ្រើសរើសគ្រឹះស្ថានឧត្តមសិក្សា និងជំនាញសិក្សាដែលជាដៃគូររបស់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ឌ.) ដូចខាងក្រោម៖",
    "qa.answer.3": "បេក្ខជនត្រូវមានលក្ខខណ្ឌ ដូចខាងក្រោម៖",
    "qa.answer.4":
      "បេក្ខជនត្រូវបំពេញពាក្យស្នើសុំអនឡាញតាមរយៈ Form Kh (in Process)",
    "qa.answer.5":
      "បន្ទាប់ពីសិស្សានុសិស្សត្រូវបានជ្រើសរើសពីកម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ក្រុមការងារលេខាធិការដ្ឋាននៃកម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល និងធ្វើការទំនាក់ទំនង ដើម្បីសម្ភាស៍ផ្ទាល់មាត់ និងបញ្ជាក់ពីការយល់ព្រមទទួលជំនួយហិរញ្ញវត្ថុគ្មានការប្រាក់របស់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល។",
    "qa.answer.6":
      "យោងទៅលើកិច្ចព្រមព្រៀងរបស់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថលដូចខាងក្រោម៖",

    //Hero Carousel
    "home.hero.title":
      "ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ បានបង្កើត “កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល” សរសេរកាត់ថា “ក.អ.ជ.ឌ.” ដើម្បីគាំទ្រដល់ដំណើរការអភិវឌ្ឍមូលធនមនុស្សឌីជីថល",
    "home.hero.description":
      "តាមរយៈការផ្តល់ថវិកាសិក្សាដោយមិនគិតការប្រាក់ ការប្រឹក្សាយោបល់ដល់និស្សិត ការសម្របសម្រួលការស្នាក់នៅរបស់និស្សិត ការសហការជាមួយគ្រឹះស្ថានឧត្តមសិក្សា និងស្ថាប័នពាក់ព័ន្ធ និង/ឬ ការអភិវឌ្ឍនិងការប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថលសម្រាប់បម្រើដល់ការអប់រំ។",
    "home.hero.somdach":
      "សម្តេចធិបតី ហ៊ុន ម៉ាណែត អញ្ជើញជាអធិបតីក្នុងពិធីបើក វេទិការដ្ឋាភិបាលឌីជីថល និងពិព័រណ៍រដ្ឋាភិបាលឌីជីថល និងបច្ចេកវិទ្យាឌីជីថលកម្ពុជា-អន្តរជាតិ លើកទី ១",
    "home.hero.somdach.description":
      "ភ្នំពេញ៖ នាព្រឹកថ្ងៃទី១១ ខែមីនា ឆ្នាំ ២០២៤ សម្តេចមហាបវរធិបតី ហ៊ុន ម៉ាណែត នាយករដ្ឋមន្រ្តី នៃព្រះរាជាណាចក្រកម្ពុជា បានអញ្ជើញជាអធិបតីក្នុងពិធីបើក វេទិការដ្ឋាភិបាលឌីជីថល និង ពិព័រណ៍រដ្ឋាភិបាលឌីជីថល និង បច្ចេកវិទ្យាឌីជីថលកម្ពុជា-អន្តរជាតិ លើកទី ១ នៅមជ្ឈមណ្ឌលសន្និបាត និងពិព័រណ៍កោះពេជ្រ។ នៅក្នុងកម្មវិធីនេះផងដែរ សម្តេចធិបតីនាយករដ្ឋមន្ត្រី អញ្ជើញទស្សនាពិព័រណ៍រដ្ឋាភិបាលឌីជីថល និងបច្ចេកវិទ្យាឌីជីថលកម្ពុជា-អន្តរជាតិ ដោយក្នុងពិព័រណ៍នោះមានរួមមាន ស្តង់របស់មជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល និងកម្មវិធីបណ្តុះបណ្តាលផ្សេងទៀតរបស់ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍។ តាមរយៈទស្សនាកិច្ចនេះ ឯកឧត្តម ជា វ៉ាន់ដេត រដ្ឋមន្ត្រីក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ បានទទួលបដិសណ្ឋារកិច្ច សម្តេចមហាបវរធិបតី ប្រកបដោយការស្វាគមន៍ និងគារវកិច្ចខ្ពង់ខ្ពស់។ ទន្ទឹមនេះ សម្តេចធិបតី បានចំណាយពេលវេលា ពិនិត្យស្វែងយល់បន្ថែម និងស្តាប់បទបង្ហាញដោយសង្ខេបអំពីមុខងារនិងគុណប្រយោជន៍ នៃមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ និងកម្មវិធីបណ្តុះបណ្តាល ដែលក្រសួងបាននឹងកំពុងអនុវត្ត ដែលវិធីសាស្ត្រមួយផ្នែកសម្រាប់បង្កើនសមត្ថភាពចាប់យកនិងប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថលរបស់មន្ត្រី និងប្រជាពលរដ្ឋក្នុងសហគមន៍ ព្រមទាំងកាត់បន្ថយគម្លាតឌីជីថល។",
    "btn.moredetails": "លម្អិតបន្ថែម",
    "applyStep.step1.title": "ជំហានទី ១៖ ចុះឈ្មោះ",
    // Apply Step 1
    "applyStep.title.1": "ជំហានងាយៗនៃការដាក់ពាក្យ",
    "applyStep.title.2": "ស្នើសុំថវិកាគម្រោងរបស់",
    "applyStep.title.3": "ក.អ.ជ.ឌ.",
    "applyStep.title.4":
      "សិស្សានុសិស្សដែលទើបប្រលងជាប់មធ្យមសិក្សាទុតិយភូមិ ឬ និស្សិត ឬ មន្ត្រីរាជការស៊ីវិល",
    "applyStep.title.5":
      "អាចបំពេញពាក្យស្នើសុំគម្រោងថវិកាជាមួយយើងខ្ញុំតាមជំហានងាយៗដូចខាងក្រោម៖",
    "applyStep.title.6":
      "បេក្ខជនត្រូវបំពេញពាក្យស្នើសុំអនឡាញតាមរយៈ www.dsdp.gov.kh/registration ទៅតាមកាលបរិច្ឆេទកំណត់។",
    "applyStep.title.7":
      "សម្រាប់ព័ត៌មានបន្ថែម សូមទាក់ទងទូរស័ព្ទលេខ ១២៣ ឬអ៊ីម៉ែល info@dsdp.gov.kh",
    "applyStep.button.title": "អំពីពួកយើង",
    "event.title": "ព្រឹត្តិការណ៍",
    "event.btn": "ព្រឹត្តិការណ៍ទាំងអស់",
    // Event Carousel
    "home.event_1.title": "កម្មវិធីចុះអនុស្សរណៈជាមួយ",
    "home.event_1.description":
      "ក.អ.ជ.ឌ. មានកិត្តិយសសូមគោរពជម្រាបជូន ដំណឹងដល់សាធារណជនទូទៅមេត្តាជ្រាបថា៖ តាមការសម្រេចរបស់រាជរដ្ឋាភិបាល ក.អ.ជ.ឌ. នឹងកំណត់ការរៀបចំ «ទិវាជាតិវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងឌីជីថល» ជាប្រចាំឆ្នាំ។ សម្រាប់ឆ្នាំ ២០២៣នេះនឹងត្រូវបានរៀបចំឡើងនៅសណ្ឋាគារ សុខាអង្គរ ខេត្តសៀមរាប",
    "home.event_2.title": "កម្មវិធីពិព័រឌីជីថលរបស់ ក.អ.ជ.ឌ.",
    "home.event_2.description":
      "ក.អ.ជ.ឌ. មានកិត្តិយសសូមគោរពជម្រាបជូន ដំណឹងដល់សាធារណជនទូទៅមេត្តាជ្រាបថា៖ តាមការសម្រេចរបស់រាជរដ្ឋាភិបាល ក.អ.ជ.ឌ. នឹងកំណត់ការរៀបចំ «ទិវាជាតិវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងឌីជីថល» ជាប្រចាំឆ្នាំ។ សម្រាប់ឆ្នាំ ២០២៣នេះនឹងត្រូវបានរៀបចំឡើងនៅសណ្ឋាគារ សុខាអង្គរ ខេត្តសៀមរាប",
    "home.event_3.title": "កម្មវិធីស្រ្តីដើម្បីជីជីថល ក.អ.ជ.ឌ.",
    "home.event_3.description":
      "ក.អ.ជ.ឌ. មានកិត្តិយសសូមគោរពជម្រាបជូន ដំណឹងដល់សាធារណជនទូទៅមេត្តាជ្រាបថា៖ តាមការសម្រេចរបស់រាជរដ្ឋាភិបាល ក.អ.ជ.ឌ. នឹងកំណត់ការរៀបចំ «ទិវាជាតិវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងឌីជីថល» ជាប្រចាំឆ្នាំ។ សម្រាប់ឆ្នាំ ២០២៣នេះនឹងត្រូវបានរៀបចំឡើងនៅសណ្ឋាគារ សុខាអង្គរ ខេត្តសៀមរាប",
    // candidate benefits
    "home.candidate_benefits.title": "អត្ថប្រយោជន៍សម្រាប់បេក្ខជន ក.អ.ជ.ឌ.",
    "home.candidate_benefits.description":
      "បេក្ខជនជ័យលាភីនៃ ក.អ.ជ.ឌ. នឹងទទួលបានអត្ថប្រយោជន៍ ដូចខាងក្រោម៖",
    // Partnership Section
    "home.partnership.title":
      "គ្រឹះស្ថានឧត្តមសិក្សាដៃគូររបស់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "home.partnership.description":
      "បេក្ខជនអាចជ្រើសរើសគ្រឹះស្ថានឧត្តមសិក្សានិងជំនាញសិក្សាដែលជាដៃគូររបស់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ឌ.) ដូចខាងក្រោម៖",
    "home.partnership.box.title": "ចង់ក្លាយជាដៃគូសហការរបស់ ក.អ.ជ.ឌ. ដែរឬទេ?",
    "home.partnership.box.description":
      "ប្រសិនបើលោកអ្នក ឬគ្រឺះស្ថានរបស់លោកអ្នក មានបំណងចង់ក្លាយជាដៃគូសហការជាមួយ ក.អ.ជ.ឌ.",

    //Partner page
    "partner.title": "ក.អ.ជ.ឌ. ស្វាគមន៍ស្ថាប័នដៃគូទូទាំងប្រទេស",
    "partner.description_1": "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ខ.)",
    "partner.description_2": "មានបេសកកម្មក្នុងការស្វែងរក និងចុះហត្ថលេខាលើ",
    "partner.description_3": "កិច្ចព្រមព្រៀងសហការណ៍ (MOUs)",
    "partner.description_4": "ជាមួយស្ថាប័នដៃគូ ដើម្បី",
    "partner.description_5": "លើកកម្ពស់ការអប់រំឌីជីថល។",
    "partner.description_6": "យើងមានកិត្តិយសក្នុងការស្វាគមន៍",
    "partner.description_7": "គ្រឹះស្ថានឧត្តមសិក្សា",
    "partner.description_8": "និង ",
    "partner.description_9": "អង្គការផ្សេងៗ",
    "partner.description_10": "ដែលបានចូលរួមជាមួយយើងជាដៃគូ។",
    "partner.description_11": "គ្រឹះស្ថានឧត្តមសិក្សា",
    "partner.description_12": "សាធារណៈ និងឯកជន",
    "partner.description_13": ", ទាំង",
    "partner.description_14": "ក្នុងស្រុក និងក្រៅស្រុក",
    "partner.description_15": "ត្រូវបានអញ្ជើញចូលរួមក្នុងគោលបំណងរួមនេះ៖",
    "partner.description_16": "ពង្រីកកិច្ចសហប្រតិបត្តការ ",
    "partner.description_17": "ក្នុង ",
    "partner.description_18": "ការអភិវឌ្ឍធនធានមនុស្សឌីជីថល",
    "partner.description_19": "ដើម្បីបំពេញតម្រូវការកើនឡើងនៃ",
    "partner.description_20": "ទីផ្សារការងារបច្ចេកវិទ្យាឌីជីថល",
    "partner.description_21": "នៅកម្ពុជា និងទូទាំងពិភពលោក។",

    // Partner Box
    "partner.box.description_1": "ចូលរួម",
    "partner.box.description_2": "ជាដៃគូ",
    "partner.box.description_3": "ជាមួយ",
    "partner.box.description_4": "ក.អ.ជ.ឌ.",
    "partner.box.description_5": "ដើម្បី",
    "partner.box.description_6": "លើកកំពស់ឧត្តមភាពក្នុងជំនាញឌីជីថល",
    "partner.box.description_7": "សម្រាប់ការអភិវឌ្ឍន៍ប្រទេសកម្ពុជា។",

    // University
    "Uni.description": "ជំនាញបណ្តុះបណ្តាល:",
    //RUPP
    "RUPP.title": "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
    "RUPP.major_1": "វិស្វកម្មទូរគមនាគមន៍ និងអេឡិចត្រូនិក",
    "RUPP.major_2": "វិស្វកម្ម និងវិទ្យាសាស្រ្តទិន្ន័យ",
    "RUPP.major_3": "ព័ត៌មានវិទ្យា",
    "RUPP.major_4": "វិស្វកម្មបច្ចេកវិទ្យាព័ត៌មាន",
    //ITC
    "ITC.title": "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា",
    "ITC.major_1": "វិស្វកម្មសុសវែរ",
    "ITC.major_2": "វិស្វកម្មបញ្ញាសិប្បនិម្មិត និងសន្តិសុខសាយប័រ",

    // AUPP
    "AUPP.title": "សាកលវិទ្យាល័យអាមេរិកាំងភ្នំពេញ",
    "AUPP.major_1": "ការគ្រប់គ្រងព័ត៌មានវិទ្យា/វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    "AUPP.major_2": "បច្ចេកវិទ្យាគមនាគមន៍និងព័ត៌មាន",
    "AUPP.major_3": "សន្តិសុខសាយប័រ",
    "AUPP.major_4": "បញ្ញាសិប្បនិម្មិត",
    "AUPP.major_5": "ហេដ្ឋារចនាសម្ព័ន្ធឌីជីថល",
    "AUPP.major_6": "ការអភិវឌ្ឍសុសវែរ",
    "AUPP.major_7": "ការវិភាគទិន្នន័យ/ប្រព័ន្ធព័ត៌មាន",
    "AUPP.major_8": "ការអភិវឌ្ឍនិងការរចនាកម្មវិធីអន្តរកម្ម",

    // NUM
    "NUM.title": "សាកលវិទ្យាល័យជាតិគ្រប់គ្រង",
    "NUM.major_1": "សេដ្ឋកិច្ចឌីជីថល",
    "NUM.major_2": "បច្ចេកវិទ្យាហិរញ្ញវត្ថុ",
    "NUM.major_3": "សហគ្រិនភាពសកលនិងនវានុវត្តន៍",
    "NUM.major_4": "ព័ត៌មានវិទ្យាធុរកិច្ច",

    // Paragon
    "Paragon.title": "សាកលវិទ្យាល័យអន្តរជាតិផារ៉ាហ្គន",
    "Paragon.major_1": "វិទ្យាសាស្ត្រកុំព្យូទ័រ",
    "Paragon.major_2": "គ្រប់គ្រងប្រព័ន្ធព័ត៌មាន",
    "Paragon.major_3": "រចនាប្លង់ និងប្រព័ន្ធផ្សព្វផ្សាយ ",

    // CADT
    "CADT.title": "បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា",
    "CADT.major_1": "វិស្វកម្មសុសវែរ",
    "CADT.major_2": "វិទ្យាសាស្ត្រទិន្នន័យ",
    "CADT.major_3": "ពាណិជ្ជកម្មអេឡិចត្រូនិច",
    "CADT.major_4": "វិស្វកម្មទូរគមនាគមន៍និងបណ្តាញ",
    "CADT.major_5": "សន្តិសុខសាយប័រ",

    // Partner About Us Button
    "partner.button.AboutUs": "ទំនាក់ទំនងមកយើង",

    //How to Apply Page V.2
    //title for how to apple page v.2
    "HowToApply.title_1": "របៀបចុះឈ្មោះស្នើសុំ",
    "HowToApply.title_2": "សំណុំលិខិតចុះឈ្មោះស្នើសុំ",
    "HowToApply.title_3": "ករណីបេក្ខជនត្រូវបានជ្រើសរើស",
    "HowToApply.title_4": "ការបរិច្ឆេទ និងការទទួលពាក្យ",
    //Description for hoqw to apply page v.2
    "HowToApply.description_1":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (Digital Skill Development Program) ជាកម្មវិធីជំនួយហិរញ្ញវត្ថុ មិនមែនអាហារូករណ៍ ក្នុងគោលបំណងផ្តល់ថវិកាសិក្សាដោយមិនគិតការប្រាក់ (Financial Aid without Interest) ដល់សិស្សានុសិស្ស ដែលទើបបញ្ចប់ការសិក្សាថ្នាក់ទី១២ (មធ្យមសិក្សាទុតិយភូមិ) មានបំណងបន្តការសិក្សាថ្នាក់បរិញ្ញាបត្រ ហើយស្រឡាញ់ការសិក្សាលើជំនាញឌីជីថល តែពុំបានទទួលអាហារូបករណ៍ពេញលេញ១០០% ពីគ្រឹះស្ថានអប់រំផ្សេងៗ។",
    "HowToApply.description_2":
      "បេក្ខជនត្រូវបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញ (Online Application) ដោយត្រូវស្កេនភ្ជាប់ឯកសារយោងរួមមាន៖",
    "HowToApply.description.point_1": "រូបថតទំហំ 4x6",
    "HowToApply.description.point_2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬលទ្ធផលប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិផ្លូវការ",
    "HowToApply.description.point_3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "HowToApply.description_3":
      "ក្នុងករណីបេក្ខជនត្រូវបានវាយតម្លៃជ្រើសរើសដើម្បីទទួលបានថវិកាសិក្សាដោយមិនគិតការប្រាក់ បេក្ខជនត្រូវប្រគល់ឯកសារថតចម្លងដោយមានបញ្ជាក់ពីអាជ្ញាធរមានសមត្តកិច្ច ឬឯកសារថតចម្លងដែលមានភ្ជាប់ QR Code ស្ដង់ដាដែលអាចផ្ទៀងផ្ទាត់បានតាមថ្នាល របស់រាជរដ្ឋាភិបាល ជាអាទ៍៖",
    "HowToApply.description.point_4":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬលទ្ធផលប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិផ្លូវការ",
    "HowToApply.description.point_5":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "HowToApply.description.point_6": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "HowToApply.description.point_7": "ឯកសារសហព័ន្ទ (ប្រសិនជាមាន) និង",
    "HowToApply.description.point_8":
      "អត្តសញ្ញាណប័ណ្ណ ឪពុក ម្ដាយ ឬអាណាព្យាបាល។",
    "HowToApply.description_4":
      "បេក្ខជនត្រូវបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញតាមរយៈតំណភ្ជាប់៖",
    "HowToApply.description_5": "https://go.gov.kh/mptc/dsdp-registration",
    "HowToApply.description_6":
      "កាលបរិច្ឆេទទទួលពាក្យគិតចាប់ពីថ្ងៃជូនដំណឹងនេះរហូតដល់ ថ្ងៃទី១ ខែវិច្ឆិកា ឆ្នាំ២០២៥",
    "HowToApply.description_7":
      "សម្រាប់ព័ត៌មានបន្ថែម សូមទាក់ទងតាមទូរសព្ទលេខ ១២៣ ។",

    // How to Apply Page
    "howToApply.title-1": "ជំហានងាយៗនៃការដាក់ពាក្យ",
    "howToApply.title-2": "ស្នើសុំថវិកាគម្រោងរបស់ ក.អ.ជ.ឌ.",
    "howToApply.subTitle":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ផ្តល់ឱកាសដល់ សិស្ស និស្សិត និង មន្ត្រីរាជការ  ដែលបំពេញលក្ខខណ្ឌដូចខាងក្រោម ៖",
    "howToApply.studentTab": "សម្រាប់សិស្ស-និស្សិត",
    "howToApply.officerTab": "សម្រាប់មន្ត្រីរាជការ",
    "howToApply.quantity1": "ចំនួន ០១ ច្បាប់",
    "howToApply.quantity2": "ចំនួន ០២ ច្បាប់",
    // How to Apply Page (Student Criteria)
    "howToApply.student.condition1.title":
      "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    "howToApply.student.condition1.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌតម្រូវដូចខាងក្រោម ៖",
    "howToApply.student.condition1.item1": "ត្រូវមានសញ្ជាតិខ្មែរ",
    "howToApply.student.condition1.item2":
      "ទទួលបានសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល ដែលមាននិន្ទេសរួម A B ឬ C",
    "howToApply.student.condition1.item3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានជាដៃគូទាំងអស់របស់ ក.អ.ជ.ឌ.",
    "howToApply.student.condition1.item4":
      "អាចឆ្លងកាត់ការប្រលង និង/ឬ ការសម្ភាស ដែលរៀបចំដោយ ក.អ.ជ.ឌ.",
    "howToApply.student.condition1.item5":
      "ត្រូវបានលើកទឹកចិត្តចំពោះបេក្ខជនមានជីវភាពក្រីក្រមកពីជនបទដាច់ស្រយាល ជាជនមានពិការភាព ជានារី",
    "howToApply.student.condition2.title":
      "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    "howToApply.student.condition2.description":
      "បេក្ខជនត្រូវស្កេនភ្ជាប់មកជាមួយនូវឯកសារយោងនៅពេលបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញរួមមាន ៖",
    "howToApply.student.condition2.item1": "រូបថត ៤x៦ ផ្ទៃស",
    "howToApply.student.condition2.item2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល",
    "howToApply.student.condition2.item3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "howToApply.student.condition2.item4": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "howToApply.student.condition3.title":
      "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    "howToApply.student.condition3.description":
      "បេក្ខជនដែលត្រូវបានជ្រើសរើសជាប់ជាស្ថាពរត្រូវមកបង្ហាញខ្លួន និងភ្ជាប់មកជាមួយនូវឯកសារតម្រូវរួមមាន ៖",
    "howToApply.student.condition3.item1":
      "1. ជីវប្រវត្តិសង្ខេបមានបិទរូបថត(រូបថត ៤x៦ ផ្ទៃ២)",
    "howToApply.student.condition3.item2":
      "2. កិច្ចព្រមព្រៀងស្តីពីការផ្តល់ថវិកាសិក្សាសម្រាប់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "howToApply.student.condition3.item3":
      "3. លិខិតធានាអះអាងពីអាណាព្យាបាល ឬសហព័ទ្ធ",
    "howToApply.student.condition3.item4":
      "4. សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល (មានឃ្យូ.អ.កូដ ស្តង់ដា ឬបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.student.condition3.item5":
      "5. អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.student.condition3.item6": "6. សេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត",
    "howToApply.student.condition3.item7":
      "7. សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    // How to Apply Page (Officer Criteria)
    "howToApply.officer.condition1.title":
      "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    "howToApply.officer.condition1.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌតម្រូវដូចខាងក្រោម ៖",
    "howToApply.officer.condition1.item1": "ត្រូវមានសញ្ជាតិខ្មែរ",
    "howToApply.officer.condition1.item2":
      "ទទួលបានសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល ដែលមាននិន្ទេសរួម A B ឬ C",
    "howToApply.officer.condition1.item3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានជាដៃគូទាំងអស់របស់ ក.អ.ជ.ឌ.",
    "howToApply.officer.condition1.item4":
      "អាចឆ្លងកាត់ការប្រលង និង/ឬ ការសម្ភាស ដែលរៀបចំដោយ ក.អ.ជ.ឌ.",
    "howToApply.officer.condition1.item5":
      "ត្រូវបានលើកទឹកចិត្តចំពោះបេក្ខជនមានជីវភាពក្រីក្រមកពីជនបទដាច់ស្រយាល ជាជនមានពិការភាព ជានារី",
    "howToApply.officer.condition2.title":
      "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    "howToApply.officer.condition2.description":
      "បេក្ខជនត្រូវស្កេនភ្ជាប់មកជាមួយនូវឯកសារយោងនៅពេលបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញរួមមាន ៖",
    "howToApply.officer.condition2.item1": "រូបថត ៤x៦ ផ្ទៃស",
    "howToApply.officer.condition2.item2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល",
    "howToApply.officer.condition2.item3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "howToApply.officer.condition2.item4": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "howToApply.officer.condition3.title":
      "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    "howToApply.officer.condition3.description":
      "បេក្ខជនដែលត្រូវបានជ្រើសរើសជាប់ជាស្ថាពរត្រូវមកបង្ហាញខ្លួន និងភ្ជាប់មកជាមួយនូវឯកសារតម្រូវរួមមាន ៖",
    "howToApply.officer.condition3.item1":
      "1. ជីវប្រវត្តិសង្ខេបមានបិទរូបថត(រូបថត ៤x៦ ផ្ទៃ២)",
    "howToApply.officer.condition3.item2":
      "2. កិច្ចព្រមព្រៀងស្តីពីការផ្តល់ថវិកាសិក្សាសម្រាប់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "howToApply.officer.condition3.item3":
      "3. លិខិតធានាអះអាងពីអាណាព្យាបាល ឬសហព័ទ្ធ",
    "howToApply.officer.condition3.item4":
      "4. សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល (មានឃ្យូ.អ.កូដ ស្តង់ដា ឬបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.officer.condition3.item5":
      "5. អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.officer.condition3.item6": "6. សេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត",
    "howToApply.officer.condition3.item7":
      "7. សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    // Contact Page
    // Info section
    "contact.title.1": "ព័ត៌មានទំនាក់ទំនង",
    "contact.description.1":
      "សូមបំពេញទម្រង់ខាងស្តាំនេះ ដើម្បធ្វើទំនាក់ទំនងមកកាន់ក្រុមការងារ ក.អ.ជ.ឌ.។ យើងនឹងឆ្លើយតបទៅវិញក្នុងរយៈពេលមិនលើសពី ២៤ម៉ោង។ ឬទំនាក់ទំនងផ្ទាល់មកកាន់លេខទូរស័ព្ទខាងក្រោមនេះ ៖",
    "contact.description.2": "123",
    "contact.description.3": "info@dsdp.gov.kh | partners@dsdp.gov.kh",
    "contact.description.4":
      "អគារលេខ ១៣ មហាវិថីព្រះមុនីវង្ស សង្កាត់ស្រះចក ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ 120210, កម្ពុជា",
    // Media Part
    "contact.title.2": "ទីតាំងលើ Google Map",
    // News and Events Page
    "newsAndEvents.title": "ព្រឹត្តិការណ៍ឌីជីថលថ្មីៗ​ ទាំងក្នុងនិងក្រៅប្រទេស",
    "newsAndEvents.short_description":
      "ស្វែងយល់ពីព័ត៌មានថ្មីៗ សេចក្តីប្រកាស និងព្រឹត្តិការណ៍នាពេលខាងមុខពីកម្មវិធីរបស់យើង។ ចាប់ពី ការជោគជ័យរបស់សិស្ស រហូតដល់ ថ្ងៃផុតកំណត់នៃការដាក់ពាក្យ សិក្ខាសាលា និងវគ្គព័ត៌មាននានា នេះគឺជាកន្លែងដែលអ្នកនឹងស្វែងរកអ្វីគ្រប់យ៉ាងដែលកំពុងកើតឡើងនៅក្នុងបេសកកម្មរបស់យើងក្នុងការគាំទ្រការអប់រំឌីជីថលតាមរយៈ ប្រាក់កម្ចីនិស្សិតគ្មានការប្រាក់។",
    "newsAndEvents.readmore": "អានបន្ថែម",
    "newsAndEvents.no_posts":
      "បច្ចុប្បន្ន មិនទាន់មានព័ត៌មាន ឬព្រឹត្តិការណ៍អ្វីទេ។",
    "newsAndEvents.sub_title": "ព័ត៌មាន និងព្រឹត្តិការណ៍ថ្មីៗ",
    // Video and Media Page
    "video-media.title": "វីដេអូ និង ការផ្សព្វផ្សាយ",
    "video-media.description":
      "សូមរីករាយជាមួយវីដេអូរបស់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (DSDP) របស់យើង! ចូលរួមជាមួយយើងក្នុងការលើកកម្ពស់ចំណេះដឹង និងជំនាញឌីជីថលក្នុងចំណោមសិស្ស ដោយរៀបចំពួកគេសម្រាប់យុគសម័យឌីជីថល។",
    // CTA Buttons
    "btn.previous": "ទំព័រមុន",
    "btn.next": "ទំព័របន្ទាប់",
    // 404 Page
    "404.title.1": "404",
    "404.description.1": "សូមអភ័យទោស ទំព័រដែលអ្នកកំពុងស្វែងរកមិនអាចរកឃើញទេ។",
    "404.description.2":
      "វាហាក់បីដូចជាទំព័រដែលអ្នកកំពុងព្យាយាមចូលដំណើរការមិនមាន ឬត្រូវបានផ្លាស់ទី។",
    "404.description.3": "សូមពិនិត្យមើល Url ម្តងទៀត",
    "404.description.4": "ត្រឡប់ទៅគេហទំព័រដើមវិញ។",
    // Footer
    "footer.title.1": "អំពីយើង",
    "footer.description.1": "អំពី ក.អ.ជ.ឌ.",
    "footer.description.2": "ប្រធាន ក.អ.ជ.ឌ.",
    "footer.description.3": "សំណួរ និង ចម្លើយ",
    "footer.title.2": "កម្មវិធី",
    "footer.description.4": "របៀបដាក់ពាក្យ",
    "footer.description.5": "សម្រាប់សិស្ស",
    "footer.description.6": "សម្រាប់មន្ត្រី",
    "footer.description.7": "សម្រាប់ភាពជាដៃគូ",
    "footer.title.3": "តំណភ្ជាប់សំខាន់ៗ",
    "footer.description.8": "ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍",
    "footer.description.9": "បណ្ឌិត្យសភាបច្ចេកវិទ្យាឌីជីថលកម្ពុជា",
    "footer.description.10": "តំណបំពេញពាក្យស្នើសុំ",
    "footer.title.4": "ទាក់ទងតាម",
    "footer.description.11":
      "អាគារលេខ 13, មហាវិថីព្រះមុនីវង្ស, សង្កាត់ស្រះចក, ខណ្ឌដូនពេញ, រាជធានីភ្នំពេញ, កម្ពុជា, 120210",
    "footer.description.12": "123",
    "footer.description.13": "info@dsdp.gov.kh | partners@dsdp.gov.kh",
    "footer.description.14": "រក្សាសិទ្ធិ",
    "footer.description.15": "រក្សាសិទ្ធិគ្រប់យ៉ាង DSDP.GOV.KH",
    "footer.description.16": "គោលការណ៍ឯកជនភាព",
    "footer.description.17": "លក្ខខណ្ឌប្រើប្រាស់",
    "footer.description.18": "ផ្លូវច្បាប់",
    "footer.description.19": "ផែនទីគេហទំព័រ",

    // under-construction
    "under-construction.title":
      "ទំព័រនេះកំពុងជួសជុល។ សូមពិនិត្យមើលម្ដងទៀតនៅពេលក្រោយ។",
  },
} as const;

export const routes: Record<string, Record<string, string>> = {
  en: {
    news: "news",
    contact: "contact",
  },
  km: {
    news: "news",
    contact: "contact",
  },
};
