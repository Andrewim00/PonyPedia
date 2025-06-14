import styles from "./page.module.css"; // Assumindo que você usaria o mesmo arquivo CSS ou um similar

export default function cadastro() {
  return (
    <div className={styles.bodyLoginContainer}> {/* Mantendo o mesmo container para o layout */}
      <section className={styles.loginBox}> {/* Reutilizando a classe da caixa, talvez renomear para 'cadastroBox' seja melhor */}
        <h1 className={styles.title}>CADASTRO</h1> {/* Título alterado para CADASTRO */}

        <form className={styles.form}>
          <label className={styles.label}>Nome do Usuário</label>
          <input type="text" className={styles.input} />

          <label className={styles.label}>Email do Usuário</label>
          <input type="email" className={styles.input} /> {/* Tipo "email" para validação básica */}

          <label className={styles.label}>Senha</label>
          <input type="password" className={styles.input} />

          <label className={styles.label}>Confirmar Senha</label>
          <input type="password" className={styles.input} />

          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>

      </section>
    </div>
  );
}