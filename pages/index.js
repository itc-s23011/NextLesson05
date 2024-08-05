import { useState } from 'react';
import styles from '../styles/globals.module.css'; // CSSモジュールをインポート

const Elevator = () => {
    const [currentFloor, setCurrentFloor] = useState(1); // 初期階数を1に設定

    const handleClick = (floor) => {
        setCurrentFloor(floor); // ボタンがクリックされたときに階数を変更
    };

    return (
        <div className={styles.elevator}>
	    <h2>
            <p>現在の階: {currentFloor}</p>
	    </h2>
            <div>
                {[1, 2, 3, 4, 5].map(floor => (
                    <button key={floor} onClick={() => handleClick(floor)}>
                        階 {floor} に移動
                    </button>
                ))}
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <div className={styles.container}>
            <Elevator />
        </div>
    );
}

