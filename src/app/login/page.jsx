
import styles from "./page.module.css";

export default function login() {
  return (
    <div className={styles.bodyLoginContainer}>
      <section className={styles.loginBox}>
        <h1 className={styles.title}>LOGIN</h1>

        <form className={styles.form}>
          <label className={styles.label}>Usuário</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}>Senha</label>
          <input type="password" className={styles.input} />

          <button type="submit" className={styles.button}>Entrar</button>
        </form>

        <p className={styles.forgotPassword}>Esqueceu a senha?</p>
      </section>
    </div>
  );
}
