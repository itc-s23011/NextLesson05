import { useState, useEffect } from 'react';
import styles from '../styles/globals.module.css';

const Elevator = () => {
    const [currentFloor, setCurrentFloor] = useState(1); // 初期階数を1に設定
    const [targetFloor, setTargetFloor] = useState(null); // 目的階を設定
    const [step, setStep] = useState(0); // 上昇または下降の方向を保持

    useEffect(() => {
        let timeout;

        if (targetFloor !== null && currentFloor !== targetFloor) {
            timeout = setTimeout(() => {
                setCurrentFloor(prevFloor => {
                    const nextFloor = prevFloor + step;
                    if (nextFloor === targetFloor) {
                        setTargetFloor(null);
                        setStep(0);
                    }
                    return nextFloor;
                });
            }, 500); // 階数を更新するタイミング

        }

        return () => clearTimeout(timeout);
    }, [currentFloor, targetFloor, step]);

    const handleClick = (floor) => {
        if (currentFloor !== floor) {
            setTargetFloor(floor);
            setStep(floor > currentFloor ? 1 : -1);
        }
    };

    return (
        <div className={styles.elevator}>
            <p>現在の階: {currentFloor}</p>
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

