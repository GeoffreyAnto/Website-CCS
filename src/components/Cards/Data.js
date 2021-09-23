class DataStructure {
  constructor(
    id,
    imgUrl,
    Title,
    Paragraph,
    DetailTitle,
    DetailParagraph,
    DetailimgUrl
  ) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.Title = Title;
    this.Paragraph = Paragraph;
    this.DetailTitle = DetailTitle;
    this.DetailParagraph = DetailParagraph;
    this.DetailimgUrl = DetailimgUrl;
  }
}

const DATA = [
  new DataStructure(
    "AppDev",
    "https://www.datamatics.com/hubfs/App-Prototyping.svg",
    "App Development",
    "Drive superior app performance across iOS and Android platforms",
    "OUR HIGH-END MOBILE APP DEVELOPMENT SERVICES",
    "We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.",
    "",
  ),
  new DataStructure(
    "WebDev",
    "https://www.datamatics.com/hubfs/cc372.svg",
    "Web Devlopment",
    "High quality web development with AngularJS and ReactJS"
  ),
  new DataStructure(
    "DBMS",
    "https://www.datamatics.com/hs-fs/hubfs/paperwork.png?width=320&name=paperwork.png",
    "Database Management",
    "Leverage digital technologies such as IoT, cloud and analytics"
  ),
  new DataStructure(
    "FullStack",
    "https://www.datamatics.com/hubfs/Progressive-Web-Apps-Development.svg",
    "Full Stack Mobile App Development",
    "Front end development, backend development and integration"
  ),
  new DataStructure(
    "ITConsulting",
    "https://www.datamatics.com/hubfs/cc201.svg",
    "IT Consulting",
    "We provide Consulting services"
  ),
  new DataStructure(
    "UxDesign",
    "https://www.datamatics.com/hubfs/cc185.svg",
    "UX Design Services",
    "Leverage our team of world class mobile UX design consultants"
  ),
];

export default DATA;
