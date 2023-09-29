import Topbar from "../Components/Topbar";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";

function Entreprise() {
  return (
    <>
      <div class="container-fluid section">
        <Sidebar />
        <main class="main-content">
          <Topbar />
          <div class="sub3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom & entreprise</th>
                  <th scope="col">type & depenses</th>
                  <th scope="col">Email & entreprise</th>
                  <th scope="col">Date</th>
                  <th scope="col">Mois</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Diara</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <Link to="">
                    <button type="button" class="btn btn-outline">
                      Dark
                    </button>
                  </Link>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Kouassi</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <Link to="">
                    <button type="button" class="btn btn-outline">
                      Dark
                    </button>
                  </Link>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>noelle</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                  <Link to="">
                    <button type="button" class="btn btn-outline">
                      Dark
                    </button>
                  </Link>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>noelle</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                  <Link to="">
                    <button type="button" class="btn btn-outline">
                      Dark
                    </button>
                  </Link>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>noelle</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                  <Link to="">
                    <button type="button" class="btn btn-outline">
                      Dark
                    </button>
                  </Link>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>noelle</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                  <Link to="">
                    <button type="button" class="btn btn-outline">
                      Dark
                    </button>
                  </Link>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default Entreprise;
