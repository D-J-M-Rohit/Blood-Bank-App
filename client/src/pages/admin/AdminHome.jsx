import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Welcome, Administrator. It is a pleasure to have you here, overseeing
            the operations of our Blood Bank App. Your role is crucial in
            ensuring that our services run smoothly, providing assistance to
            those in need. As you navigate through the system, you will find
            opportunities to make a profound impact on countless lives. Each
            decision made and action taken holds the potential to alleviate
            suffering and offer hope. Together, we strive to uphold the noble
            mission of serving humanity. Your dedication and leadership are
            instrumental in guiding us towards achieving our goals. Let us
            continue this journey with compassion, efficiency, and unwavering
            commitment to our cause.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
