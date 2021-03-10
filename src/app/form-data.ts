export const data: FormControl[] = [
  {
    type: "dropdown",
    text: "drop",
    num: 1.23,
    options: [
      {
        value:null,
        label :"unselected 🚨"
      },
      {
        value: 1,
        label: "drop1"
      },
      {
        value: 2,
        label: "drop2"
      }
    ]
  },
  {
    type: "checkbox",
    text: "check",
    num: 1.23,
    options: [
      {
        value: 1,
        label: "check1"
      },
      {
        value: 2,
        label: "check2"
      }
    ]
  },
  {
    type: "radio",
    text: "radio",
    num: 1.23,
    options: [
      {
        value: 1,
        label: "radio1"
      },
      {
        value: 2,
        label: "radio2"
      }
    ]
  }
];

export interface FormControl {
  type: "dropdown" | "checkbox" | "radio";
  text: string;
  num: number;
  options: { value: any; label: any }[];
}
