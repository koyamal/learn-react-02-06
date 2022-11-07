export const Practice4 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTotalFee(1000);
  };
  return (
    <div>
      <p>Practice4: Edit Config</p>
      <button onClick={onClickPractice}>Practice4</button>
    </div>
  );
};
