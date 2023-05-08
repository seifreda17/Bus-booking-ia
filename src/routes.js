import {Navigate, createBrowserRouter} from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/Authn/Login";
import Register from "./pages/Authn/Register";
// import AppDetails from "./pages/AppointmentDetials/AppointmentDetials";
import ManageApps from "./pages/ManageApps/ManageApp";
import Addappointments from "./pages/ManageApps/Addapps";
import App from './App';
import Guest from "./middleware/Guest";
import Admin from "./middleware/Admin";
import UpdateAppointment from "./pages/ManageApps/Updateappoint";
import ManageTrav from "./pages/TravellersDetails/ManageTravellers";
import AddTrav from "./pages/TravellersDetails/AddTrav";
import UpdateTrav from "./pages/TravellersDetails/UpdateTrav";
import ManageRequest from "./pages/ManageRequest/ManageRequest";
import ShowMyHistory from "./pages/ShowMyHistory/ShowMyHistory";

  export const routes = createBrowserRouter([
    {
        path :'',
        element : <App />,
        //Nesting Routes
        children:[
            {   path: "/",
              element: <Home />,
            },
            // {   path: "/:id",
            //   element: <AppDetails />,
            // },
            //GUEST MIIDLEWARE
            {
              element:<Guest/>,
              children:[
                {   path: "/login",
                element: <Login />,
              },
                {
                    path: "/register",
                    element:<Register />,
                  },

              ]
            },
            {
              path: "/Show_History",
             
                element:<ShowMyHistory />
              },

           

              {
                path: "/Manage-Appointment",
                element:<Admin/>,
               children:[
                {
                
                  path:"",
                  element:<ManageApps />
                },

                {
                  path:"create",
                  element:<Addappointments />
                },
                {
                  path:':id',
                  element:<UpdateAppointment />
                },
                
              
              
              ],
              },
              {
                path: "/Manage-Requests",
                element:<Admin/>,
               children:[
                {
                
                  path:"",
                  element:<ManageRequest />
                },
      

  
                
              
              
               ],
               },
              {
                path: "/Manage-Travellers",
                element:<Admin/>,
               children:[
                {
                
                  path:"",
                  element:<ManageTrav />
                },

                {
                  path:"create",
                  element:<AddTrav />
                },
                {
                  path:':id',
                  element:<UpdateTrav />
                },
                
              
              
              ],
              },
              

            ],
     },
    
     {
        path:'*',
        element:<Navigate to={''}/>
     }
    
    
  ]);