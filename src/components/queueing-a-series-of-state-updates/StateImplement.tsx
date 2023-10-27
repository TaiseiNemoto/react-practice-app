export default function StateImplement() {
  const finalStateOne = getFinalState(0, [1, 1, 1]);
  const finalStateTwo = getFinalState(0, [
    (n) => n + 1,
    (n) => n + 1,
    (n) => n + 1,
  ]);
  const finalStateThree = getFinalState(0, [5, (n) => n + 1]);
  const finalStateFour = getFinalState(0, [5, (n) => n + 1, 42]);

  return (
    <>
      <p>finalStateOne: {finalStateOne}</p>
      <p>finalStateTwo: {finalStateTwo}</p>
      <p>finalStateThree: {finalStateThree}</p>
      <p>finalStateFour: {finalStateFour}</p>
    </>
  );
}

type UpdateFuncType = (num: number) => number;

function getFinalState(
  baseState: number,
  queue: Array<number | UpdateFuncType>,
) {
  let finalState = baseState;

  for (const update of queue) {
    if (typeof update === 'function') {
      finalState = update(finalState);
    } else {
      finalState = update;
    }
  }

  return finalState;
}
