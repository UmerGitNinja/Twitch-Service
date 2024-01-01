import _ from "lodash";

export default function FindIndex(marks: { value: number }[], value: number) {
  const Index = _.findIndex(marks, (obj) => obj.value === value);

  return Index;
}
