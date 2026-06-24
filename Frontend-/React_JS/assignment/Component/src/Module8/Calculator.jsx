import React, { useState, useEffect } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  useEffect(() => {
    document.title = result ? `Result: ${result}` : "Calculator";
  }, [result]);

  const display = (value) => {
    setResult((prev) => prev + value);
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div style={styles.container}>
      <table style={styles.calculator}>
        <tbody>
          <tr>
            <td colSpan="3">
              <input
                type="text"
                value={result}
                readOnly
                style={styles.displayBox}
              />
            </td>
            <td>
              <button
                style={styles.specialBtn}
                onClick={clearScreen}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#dc2626")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#ef4444")
                }
              >
                C
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button
                style={styles.btn}
                onClick={() => display("1")}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#4b5563")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#374151")
                }
              >
                1
              </button>
            </td>
            <td>
              <button
                style={styles.btn}
                onClick={() => display("2")}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#4b5563")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#374151")
                }
              >
                2
              </button>
            </td>
            <td>
              <button
                style={styles.btn}
                onClick={() => display("3")}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#4b5563")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "#374151")
                }
              >
                3
              </button>
            </td>
            <td>
              <button
                style={styles.operatorBtn}
                onClick={() => display("/")}
              >
                ÷
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button style={styles.btn} onClick={() => display("4")}>
                4
              </button>
            </td>
            <td>
              <button style={styles.btn} onClick={() => display("5")}>
                5
              </button>
            </td>
            <td>
              <button style={styles.btn} onClick={() => display("6")}>
                6
              </button>
            </td>
            <td>
              <button style={styles.operatorBtn} onClick={() => display("-")}>
                −
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button style={styles.btn} onClick={() => display("7")}>
                7
              </button>
            </td>
            <td>
              <button style={styles.btn} onClick={() => display("8")}>
                8
              </button>
            </td>
            <td>
              <button style={styles.btn} onClick={() => display("9")}>
                9
              </button>
            </td>
            <td>
              <button style={styles.operatorBtn} onClick={() => display("*")}>
                ×
              </button>
            </td>
          </tr>

          <tr>
            <td>
              <button style={styles.btn} onClick={() => display(".")}>
                .
              </button>
            </td>
            <td>
              <button style={styles.btn} onClick={() => display("0")}>
                0
              </button>
            </td>
            <td>
              <button
                style={styles.equalBtn}
                onClick={calculate}
              >
                =
              </button>
            </td>
            <td>
              <button style={styles.operatorBtn} onClick={() => display("+")}>
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },

  calculator: {
    backgroundColor: "#1f2937",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
  },

  displayBox: {
    width: "95%",
    height: "60px",
    fontSize: "28px",
    textAlign: "right",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "#111827",
    color: "#fff",
    padding: "10px",
    marginBottom: "10px",
    outline: "none",
  },

  btn: {
    width: "70px",
    height: "70px",
    margin: "5px",
    borderRadius: "15px",
    border: "none",
    fontSize: "22px",
    fontWeight: "bold",
    backgroundColor: "#374151",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },

  operatorBtn: {
    width: "70px",
    height: "70px",
    margin: "5px",
    borderRadius: "15px",
    border: "none",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "#3b82f6",
    color: "#fff",
    cursor: "pointer",
  },

  specialBtn: {
    width: "70px",
    height: "70px",
    margin: "5px",
    borderRadius: "15px",
    border: "none",
    fontSize: "22px",
    fontWeight: "bold",
    backgroundColor: "#ef4444",
    color: "#fff",
    cursor: "pointer",
  },

  equalBtn: {
    width: "70px",
    height: "70px",
    margin: "5px",
    borderRadius: "15px",
    border: "none",
    fontSize: "22px",
    fontWeight: "bold",
    backgroundColor: "#10b981",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Calculator;