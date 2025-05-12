const Light = ({ color, isActive }) => {
  return (
    <>
      <div className={isActive ? `light active ${color}` : `light ${color}`}></div>
    </>
  );
};
export default Light;
