import "./MyInfoAdmin.css"
import React, {useEffect, useState} from "react"
import {getAllData, deleteCurrentReservation} from "../../../services/ApiClient"
import {Link} from "react-router-dom"
import AdminUsers from "./AdminUsers/AdminUsers"
import AdminInstructors from "./AdminInstructors/AdminInstructors"
import AdminGyms from "./AdminGyms/AdminGyms"
import AdminReservations from "./AdminReservations/AdminReservations"
import AdminLessons from "./AdminLessons/AdminLessons"
import AdminOrgs from "./AdminOrgs/AdminOrgs"
import AdminStatistics from "./AdminStatistics/AdminStatistics"
import ModalEditUser from "../../ModalEditUser/ModalEditUser"
import ModalEditInstructor from "../../ModalEditInstructor/ModalEditInstructor"
import ModalEditGym from "../../ModalEditGym/ModalEditGym"
import ModalEditLesson from "../../ModalEditLesson/ModalEditLesson"
import ModalEditReservation from "../../ModalEditReservation/ModalEditReservation"
import ModalEditOrg from "../../ModalEditOrg/ModalEditOrg"
import Banner from "../../Banner/Banner"
import AdminInvoices from "./AdminInvoices/AdminInvoices"

export default function MyInfoAdmin({user}) {
  const [allData, setAllData] = useState([])
  const [homeBool, setHomeBool] = useState(true)
  const [userBool, setUserBool] = useState(false)
  const [instructorsBool, setInstructorsBool] = useState(false)
  const [gymsBool, setGymsBool] = useState(false)
  const [reservationsBool, setReservationsBool] = useState(false)
  const [lessonsBool, setLessonsBool] = useState(false)
  const [orgsBool, setOrgsBool] = useState(false)
  const [statisticsBool, setStatisticsBool] = useState(false)
  const [invoicesBool, setInvoicesBool] = useState(false)
  const [bool, setBool] = useState(false)
  const [userInfo, setUserInfo] = useState([])
  const [instructorInfo, setInstructorInfo] = useState([])
  const [gymInfo, setGymInfo] = useState([])
  const [lessonInfo, setLessonInfo] = useState([])
  const [reservationInfo, setReservationInfo] = useState([])
  const [orgInfo, setOrgInfo] = useState([])
  const [adminHome, setAdminHome] = useState(true)
  const [bannerTitle, setBannerTitle] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllData()
      setAllData(result)
      setBannerTitle('Victs Admin')
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllData()
      setAllData(result)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!bool])

  const showModal = (userId) => {
    setBool(!bool)
    setUserInfo(userId)
  }

  const showModalInstructor = (userId) => {
    setBool(!bool)
    setInstructorInfo(userId)
  }

  const showModalGym = (userId) => {
    setBool(!bool)
    setGymInfo(userId)
  }

  const showModalLesson = (userId) => {
    setBool(!bool)
    setLessonInfo(userId)
  }

  const showModalReservation = (userId) => {
    setBool(!bool)
    setReservationInfo(userId)
  }

  const showModalOrg = (userId) => {
    setBool(!bool)
    setOrgInfo(userId)
  }

  const hideModal = async () => {
    const result = await getAllData()
    setAllData(result)
    setBool(!bool)
  }

  const deleteReservation = async (reservation) => {
    await deleteCurrentReservation(reservation.id)
    // setAllData(allData)
    setBool(!bool)
  }

  const showUsers = () => {
    setUserBool(!userBool)
    setInstructorsBool(false)
    setGymsBool(false)
    setReservationsBool(false)
    setLessonsBool(false)
    setOrgsBool(false)
    setAdminHome(false)
    setHomeBool(false)
    setStatisticsBool(false)
    setInvoicesBool(false)
    setBannerTitle('Victs Users')
  }
  const showInstructors = () => {
    setInstructorsBool(!instructorsBool)
    setUserBool(false)
    setGymsBool(false)
    setReservationsBool(false)
    setLessonsBool(false)
    setOrgsBool(false)
    setAdminHome(false)
    setHomeBool(false)
    setStatisticsBool(false)
    setInvoicesBool(false)
    setBannerTitle('Victs Instructors')
  }
  const showGyms = () => {
    setGymsBool(!gymsBool)
    setUserBool(false)
    setInstructorsBool(false)
    setReservationsBool(false)
    setLessonsBool(false)
    setOrgsBool(false)
    setAdminHome(false)
    setHomeBool(false)
    setStatisticsBool(false)
    setInvoicesBool(false)
    setBannerTitle('Victs Gyms')
  }

  const showReservations = () => {
    setReservationsBool(!reservationsBool)
    setUserBool(false)
    setInstructorsBool(false)
    setGymsBool(false)
    setLessonsBool(false)
    setOrgsBool(false)
    setAdminHome(false)
    setHomeBool(false)
    setStatisticsBool(false)
    setInvoicesBool(false)
    setBannerTitle('Victs Reservations')
  }

  const showLessons = () => {
    setLessonsBool(!lessonsBool)
    setUserBool(false)
    setInstructorsBool(false)
    setGymsBool(false)
    setReservationsBool(false)
    setOrgsBool(false)
    setAdminHome(false)
    setHomeBool(false)
    setStatisticsBool(false)
    setInvoicesBool(false)
    setBannerTitle('Victs Lessons')
  }

  const showOrgs = () => {
    setOrgsBool(!orgsBool)
    setUserBool(false)
    setInstructorsBool(false)
    setGymsBool(false)
    setReservationsBool(false)
    setLessonsBool(false)
    setAdminHome(false)
    setHomeBool(false)
    setStatisticsBool(false)
    setInvoicesBool(false)
    setBannerTitle('Victs ORGs')
  }

  const showHome = () => {
    setHomeBool(!homeBool)
    setOrgsBool(false)
    setUserBool(false)
    setInstructorsBool(false)
    setGymsBool(false)
    setReservationsBool(false)
    setLessonsBool(false)
    setAdminHome(true)
    setStatisticsBool(false)
    setInvoicesBool(false)
  }

  const showStatistics = () => {
    setStatisticsBool(!statisticsBool)
    setUserBool(false)
    setInstructorsBool(false)
    setGymsBool(false)
    setReservationsBool(false)
    setLessonsBool(false)
    setOrgsBool(false)
    setAdminHome(false)
    setHomeBool(false)
    setInvoicesBool(false)
    setBannerTitle('Victs Statistics')
  }

  const showInvoices = () => {
    setInvoicesBool(!invoicesBool)
    setUserBool(false)
    setInstructorsBool(false)
    setGymsBool(false)
    setReservationsBool(false)
    setLessonsBool(false)
    setAdminHome(false)
    setHomeBool(false)
    setStatisticsBool(false)
    setBannerTitle('Victs Invoices')
  }  


  return (
    <section className="MyInfoAdmin">
      {bool && userBool && <ModalEditUser user={userInfo} onClick={hideModal} />}
      {bool && instructorsBool && <ModalEditInstructor user={instructorInfo} onClick={hideModal} />}
      {bool && gymsBool && <ModalEditGym user={gymInfo} onClick={hideModal} />}
      {bool && lessonsBool && <ModalEditLesson user={lessonInfo} onClick={hideModal} />}
      {bool && reservationsBool && <ModalEditReservation user={reservationInfo} onClick={hideModal} deleteReservation={(reservation) => deleteReservation(reservation)} />}
      {bool && orgsBool && <ModalEditOrg user={orgInfo} onClick={hideModal} />}
      <nav className="navbar navbar-expand-lg admin-nav ">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${homeBool && "active"}`}
                onClick={showHome}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${userBool && "active"}`}
                onClick={showUsers}
              >
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${gymsBool && "active"}`}
                onClick={showGyms}
              >
                Gyms
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${instructorsBool && "active"}`}
                onClick={showInstructors}
              >
                Instructors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${lessonsBool && "active"}`}
                onClick={showLessons}
              >
                Lessons
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${reservationsBool && "active"}`}
                onClick={showReservations}
              >
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${orgsBool && "active"}`}
                onClick={showOrgs}
              >
                ORG's
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${statisticsBool && "active"}`}
                onClick={showStatistics}
              >
                Statistics
              </Link>
            </li>
            <li className="nav-item">
            <Link
                className={`nav-link ${invoicesBool && "active"}`}
                onClick={showInvoices}
              >
                Invoices
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Banner title={bannerTitle} subtitle="god" className="margin-top" />
      {adminHome &&
        <div className="admin-content container">
          <div className="row justify-content-between">
            <div className="col-12 col-sm-5 admin-bg"></div>
            <div className="col-12 col-sm-6">
              <h1 className="big big-yellow">Global view</h1>
              <div className="admin-info user-data" onClick={showUsers}>
                <p>There are <strong>{allData[0]?.length} users</strong> registered right now <br /> <span>view more</span></p>
              </div>
              <div className="admin-info gyms-data" onClick={showGyms}>
                <p>There are <strong>{allData[1]?.length} gyms</strong> registered right now <br /> <span>view more</span></p>
              </div>
              <div className="admin-info instructor-data" onClick={showInstructors}>
                <p>There are <strong>{allData[2]?.length}  instructors</strong> registered right now <br /> <span>view more</span></p>
              </div>
              <div className="admin-info lessons-data" onClick={showLessons}>
                <p>There are <strong>{allData[3]?.length} lessons</strong> created right now <br /> <span>view more</span></p>
              </div>
              <div className="admin-info reservations-data" onClick={showReservations}>
                <p>There are <strong>{allData[4]?.length} reservations</strong> made right now <br /> <span>view more</span></p>
              </div>
              <div className="admin-info orgs-data" onClick={showOrgs}>
                <p>There are <strong>{allData[5]?.length} ORGs</strong> added right now <br /> <span>view more</span></p>
              </div>
            </div>
          </div>
        </div>
      }
      {userBool && (
        <AdminUsers
          onClick={(userId) => showModal(userId)}
          data={allData[0]}
        />
      )}
      {instructorsBool && (
        <AdminInstructors
          onClick={(userId) => showModalInstructor(userId)}
          data={allData[2]}
        />
      )}
      {gymsBool && (
        <AdminGyms
          onClick={(userId) => showModalGym(userId)}
          data={allData[1]}
        />
      )}
      {reservationsBool && (
        <AdminReservations
          onClick={(userId) => showModalReservation(userId)}
          data={allData[4]}
        />
      )}
      {lessonsBool && (
        <AdminLessons
          onClick={(userId) => showModalLesson(userId)}
          data={allData[3]}
        />
      )}
      {orgsBool && (
        <AdminOrgs
          onClick={(userId) => showModalOrg(userId)}
          data={allData[5]}
        />
      )}
      {statisticsBool && (
        <AdminStatistics
          data={allData}
        />
      )}
            {invoicesBool && (
        <AdminInvoices
          data={allData}
        />
      )}
    </section>
  )
}
