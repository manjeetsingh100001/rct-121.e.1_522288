import styles from "./CandidateCard.module.css";

function CandidateCard({name,avatar,title,company_name,salary}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img src={avatar} alt="logo" width="100px" height="100px" />
      <div>
        <div>Name:{name}</div>
        <div>Title {title} & Company Name  {company_name}</div>
      </div>
      <div>${salary} Salary</div>
    </div>
  );
}

export default CandidateCard;
