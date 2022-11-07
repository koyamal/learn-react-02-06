export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>Practice2: Type of Return Value</p>
      <button onClick={onClickPractice}>Practice2</button>
    </div>
  );
};
