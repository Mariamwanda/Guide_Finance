import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";

function Depense() {
  return (
    <>
      <div class="container-fluid section">
        <Sidebar />
        <main class="main-content">
          <Topbar />
          <div class="box total-box">
            <div class="total-box__left">
              <div class="header-container">
                <h3 class="section-header" style={{ fontSize: "20px" }}>
                  Total Revenus
                </h3>
                <i class="fa-solid fa-arrow-up"></i>
              </div>
              <h1 class="price" style={{ color: "#005c96" }}>
                Fcfa 2.000.000<span class="price-currency"></span>
              </h1>
              <p>
                <span class="percentage-increase">20%</span>
                sur tout les entreprises
              </p>
            </div>
            <div class="total-box__right">
              <div class="header-container">
                <h3 class="section-header">Total pret</h3>
              </div>
              <h1 class="price" style={{ color: "#005c96" }}>
                Fcfa 50,530.00<span class="price-currency"></span>
              </h1>
            </div>
          </div>
          <div class="box transaction-box">
            <div class="header-container">
              <h3 class="section-header" style={{ fontSize: "30px" }}>
                Transaction History
              </h3>
              <div class="date-selector">
                <span>1 Oct - 1 Feb 2023</span>
              </div>
            </div>
            <table class="transaction-history">
              <tr>
                <th>Transactions</th>
                <th>Date</th>
                <th>Somme</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>Banque Transfert</td>
                <td>Sep 01,2022</td>
                <td>fcfa 2,000.00</td>
                <td>
                  <svg
                    class="status"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill="#BCE455"
                      fill-opacity="0.3"
                    />
                    <circle cx="8" cy="8" r="4" fill="#7FB519" />
                  </svg>
                  Terminé
                </td>
              </tr>
              <tr>
                <td>Paypal</td>
                <td>Sep 11,2023</td>
                <td>fcfa2,000.00</td>
                <td>
                  <svg
                    class="status"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill="#DBA32A"
                      fill-opacity="0.14"
                    />
                    <circle cx="8" cy="8" r="4" fill="#DBA32A" />
                  </svg>
                  En cours...
                </td>
              </tr>
              <tr>
                <td>Banque Transfert</td>
                <td>Sep 06,2023</td>
                <td>fcfa 2,000.00</td>
                <td>
                  <svg
                    class="status"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="16"
                      height="16"
                      rx="8"
                      fill="#DB2719"
                      fill-opacity="0.3"
                    />
                    <circle cx="8" cy="8" r="4" fill="#DB2719" />
                  </svg>
                  Non effectué
                </td>
              </tr>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default Depense;
