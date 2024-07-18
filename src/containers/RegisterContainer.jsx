import style from "../assets/scss/Register.module.scss";
const RegisterContainer = ({ children }) => {
  return (
    <section className={style.section}>
      <div className={style.container}>{children}</div>
    </section>
  );
};
export default RegisterContainer;
