import { useEffect, useState } from "react";
import Profile from "./profile";
import Search from "./search";
import styles from "./style.module.css";

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const GithubProfile = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    const controller = new AbortController();

    const fetchGithubProfile = async () => {
      setLoading(true);

      try {
        const res = await fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Accept: "application/json",
          },
          signal: controller.signal,
        });

        if (!res.ok) return setUser(null);

        const user = await res.json();
        setUser(user);
      } catch (error: any) {
        setUser(null);
        console.error("Failed to fetch github profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubProfile();

    return () => controller.abort();
  }, [username]);

  return (
    <div className={styles.container}>
      <h2>Github Profile Finder</h2>
      <Search onChange={(username: string) => setUsername(username)} />
      {loading && <div>Loading ...</div>}
      {user && <Profile user={user} />}
    </div>
  );
};

export default GithubProfile;
