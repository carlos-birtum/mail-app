import { IMessage } from "../interfaces/mail.interface";

const MessageData: Array<IMessage> = [
  {
    id: 1,
    importance: "baja",
    attached: true,
    personfor: "Carlos Maykel Lopez Gonzalez",
    email: "carlos.lopez@telematel.com",
    subject:
      "Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 Test1 ",
    sent: "2021-06-03",
    size: "5kb",
    read: true,
    marked: true,
    isdelete: true,
    body: "Et vehicula libero proin tellus augue risus vel torquent. Tellus malesuada duis fermentum sagittis purus. Aenean phasellus proin nostra sit laoreet feugiat. Suscipit adipiscing sociosqu elit aenean ut. <br/>Tortor hac dolor massa ligula congue. Consequat integer fusce duis. Orci integer vel amet sed. Erat quam dolor consectetur venenatis orci facilisis lobortis congue. Aptent mattis pellentesque ad etiam lectus conubia senectus maecenas. Non ac mi faucibus rutrum.",
  },
  {
    id: 2,
    importance: "alta",
    attached: true,
    personfor: "Alexia Llorente",
    email: "brefassannelle@yopmail.com",
    subject:
      "Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 ",
    sent: "2021-06-10",
    size: "5kb",
    read: false,
    marked: false,
    isdelete: false,
    body: "<b>Lorem ipsum dolor sit amet</b>, consectetuer adipiscing elit. Suspendisse ut metus. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus. Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum.<br/><br/> Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 3,
    importance: "normal",
    attached: true,
    personfor: "Fabian Leiva",
    email: "copatron@pamspine.com",
    subject:
      "Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 ",
    sent: "2021-06-10",
    size: "5kb",
    read: false,
    marked: true,
    isdelete: false,
    body: "<b>Ullamcorper morbi nec primis integer ante curabitur elit.</b> Ligula fames arcu sollicitudin inceptos magna. Curae nostra eleifend integer mi nisl platea auctor vivamus venenatis. <br/>Nullam cursus risus a velit vitae. Tellus eleifend dictumst auctor habitasse vehicula conubia lacinia elementum. Sed gravida erat vivamus senectus leo. Convallis adipiscing etiam nisi donec diam varius euismod. Etiam malesuada curabitur diam.",
  },
  {
    id: 4,
    importance: "alta",
    attached: false,
    personfor: "Cayetano Valls",
    email: "chair@hotmail.com",
    subject:
      "Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 ",
    sent: "2021-06-15",
    size: "51kb",
    read: true,
    marked: false,
    isdelete: false,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <b>Suspendisse ut metus</b>. Proin venenatis turpis sit amet ante consequat semper. Aenean nunc. Duis iaculis odio id lectus.<br/> Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy. Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. Proin eget tellus ut ante dignissim dictum. <br/><br/>Integer ut justo quis eros feugiat convallis. Praesent massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 5,
    importance: "alta",
    attached: false,
    personfor: "Naima Cordon",
    email: "chair@hotmail.com",
    subject: "Test5 Test5 Test5 Test5 Test5 Test5 Test5 Test5 Test5 Test5 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    marked: true,
    isdelete: false,
    body: "<b>Porta dui laoreet. </b>Aenean erat elementum eu magna aenean eget feugiat porttitor urna. Ad molestie nullam lectus dapibus etiam lobortis hac. Laoreet nisl imperdiet nec habitasse donec.<br/> In commodo eros rhoncus pellentesque nec ut mollis. Semper nullam proin viverra semper ultricies in dictum. Mauris porta velit fermentum rutrum volutpat. Nisi hac leo.",
  },
  {
    id: 6,
    importance: "alta",
    attached: false,
    personfor: "Jessica Sole",
    email: "jessica@hotmail.com",
    subject:
      "Test6 Test6 Test6 Test6 Test6 Test6 Test6 Test6 Test6 Test6 Test6 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    marked: false,
    isdelete: false,
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <b>Suspendisse ut metus.</b> Proin venenatis turpis sit amet ante consequat semper.<br/><br/> Aenean nunc. Duis iaculis odio id lectus. <br/>Integer dapibus justo vitae elit. Nunc luctus, tortor quis iaculis tempus, urna odio iaculis erat, imperdiet lobortis orci lectus at eros. Ut a velit id odio malesuada nonummy.<br/><br/>Aenean cursus metus a purus. Duis dapibus odio a enim. Aliquam ut diam sed nisl imperdiet gravida. <br/>Proin eget tellus ut ante dignissim dictum. Integer ut justo quis eros feugiat convallis. Praesent massa.<br/> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla egestas, nibh at malesuada nonummy, mi augue condimentum velit, a facilisis tortor ipsum non diam.",
  },
  {
    id: 7,
    importance: "alta",
    attached: false,
    personfor: "Adan Espejo",
    email: "adan.espejo@gmail.com",
    subject: "Test7 Test7 Test7 Test7 Test7 Test7 Test7 Test7 Test7 Test7 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    marked: true,
    isdelete: false,
    body: "Al estar escrito en un lenguaje clásico (el más usado está derivado del latín clásico) suele despertar curiosidad saber qué significa.<br/> Sin embargo el significado del texto no tiene importancia debido a que si un texto es legible los usuarios suelen centrarse en lo que dice el texto y no en el diseño, que es el objetivo en este caso.",
  },
  {
    id: 8,
    importance: "alta",
    attached: false,
    personfor: "Eduard Snchez",
    email: "Eduard@hotmail.com",
    subject: "Test8 Test8 Test8 Test8 Test8 Test8 Test8 Test8 Test8 Test8 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    marked: false,
    isdelete: false,
    body: "Tempor etiam dapibus ornare curabitur purus cras lacus. <br/>Condimentum tincidunt maecenas leo eu rhoncus etiam lacinia risus tempor. <br/><b>Tellus enim orci tristique ad litora.</b>. Phasellus aenean dictumst interdum aliquam ad lorem mauris. In dictumst curae nibh. <br/><br/>Torquent tempus enim lacus fames ullamcorper nam. Faucibus curabitur fusce purus aliquam ullamcorper quisque ac risus vestibulum.<br/> Conubia taciti lectus. Vel leo consequat urna duis proin urna convallis facilisis rhoncus. Integer porta tincidunt turpis netus.",
  },
  {
    id: 9,
    importance: "alta",
    attached: false,
    personfor: "Pedro Maria Morilla",
    email: "pedro.morilla@hotmail.com",
    subject: "Test9 Test9 Test9 Test9 Test9 Test9 Test9 Test9 Test9 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    marked: true,
    isdelete: false,
    body: "Semper blandit gravida ac euismod libero imperdiet magna fringilla non. Vitae suscipit bibendum habitasse eros etiam. Mollis fames tellus donec et ultrices arcu himenaeos aliquet. <br/>Vel curabitur habitasse id tempor sed lorem mi nibh. Morbi risus nullam accumsan aliquam rutrum posuere integer. Potenti curabitur arcu convallis viverra quisque augue. Litora turpis velit. Taciti nisl phasellus accumsan quisque curabitur tristique tempor vulputate.",
  },
  {
    id: 10,
    importance: "alta",
    attached: false,
    personfor: "Iker Mesa",
    email: "iker.mesa@hotmail.com",
    subject:
      "Test10 Test10 Test10 Test10 Test10 Test10 Test10 Test10 Test10 Test10 ",
    sent: "2021-06-15",
    size: "15kb",
    read: true,
    marked: false,
    isdelete: false,
    body: "Nibh risus leo aliquam semper. Pretium vel arcu suscipit litora pharetra aliquam justo. Taciti purus ornare platea lacinia blandit nec porta. Eu interdum suspendisse commodo. <br/>Ut pretium etiam est. Curabitur accumsan tempor sapien inceptos class.",
  },
];

export default MessageData;
