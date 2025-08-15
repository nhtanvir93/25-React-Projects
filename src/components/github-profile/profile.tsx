import { User } from ".";
import styles from "./style.module.css";

interface Props {
  user: User;
}

const Profile = ({ user }: Props) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.profileImg} src={user.avatar_url} />
        <a className={styles.profileLink} target="_blank" href={user.html_url}>
          {user.login}
        </a>
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <div className={styles.title}>Public Repositories</div>
          <div className={styles.content}>{user.public_repos}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>Followers</div>
          <div className={styles.content}>{user.followers}</div>
        </div>
        <div className={styles.details}>
          <div className={styles.title}>Following</div>
          <div className={styles.content}>{user.following}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
