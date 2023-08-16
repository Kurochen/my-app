import Image from "next/image";
import hero from "../../public/hero.jpg";
import styles from "./page.module.css";
import { Button } from "antd";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Image alt="arch" src={hero} fill className={styles.image} />
      <div className={styles.text}>
        <h1>Каталог проектов</h1>
        {/* <Title>Каталог проектов</Title> */}
        <p>
          Подбор по параметрам. Безопасная сделка. <br /> Скоро. <br />
        </p>
        <Link href="/catalog">
          <Button className={styles.button} type="primary" size="large">
            Перейти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
