export const validservice = {
  serviceId: "123412341234123412341234",
  userId: "123456123456123456123456",
  content: [
    {
      questionName: "111111111111111111111111",
      questionType: "RADIO",
      required: true,
      services: ["123456781234567812345678", "63510acd07d3e2e85fd642e1"],
    },
  ],
};

export const validserviceId = "123412341234123412341abc";
export const validUserId = "123456123456123456123abc";
export const validContent1 = [
  {
    questionName: "111111111111111111111111",
    questionType: "RADIO",
    required: true,
    services: ["123456781234567812345abc", "63510acd07d3e2e85fd642e1"],
  },
];

export const validContent2 = [
  {
    questionName: "111111111111111111111111",
    questionType: "RADIO",
    required: true,
    services: [
      {
        service: "12345678123456781234abcd",
      },
    ],
  },
];

export const invalidserviceId = "635139dd307506b573d447b";
export const invalidUserId = "635139dd307506b573d447b";
export const invalidContent = [
  {
    questionId: "11111111111111111111abcd",
    required: true,
    services: [
      {
        service: "12345678123456781234abc    ",
      },
    ],
  },
];
