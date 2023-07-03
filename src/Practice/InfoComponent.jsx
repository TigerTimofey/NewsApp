function InfoComponent({ heigth, weigth, setCount, HairColor }) {
  return (
    <div>
      <button
        onClick={() => {
          setCount(100);
        }}
      >
        Set hungred
      </button>
      <p>Heigth: {heigth}</p>
      <p>Weigth: {weigth}</p>
      <HairColor color="red" />
    </div>
  );
}
export default InfoComponent;
