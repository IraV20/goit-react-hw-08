import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <title>Welcome</title>
      <div className={css.container}>
        <h1>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}