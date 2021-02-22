export default () => {
  import("../../four/also-deep").then((fromTheDeep) => {
    fromTheDeep.doTheThing("hello");
  });
};
