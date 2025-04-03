import { getCurrentSession } from "@/actions/auth";

const Home = async () => {
    const { user } = await getCurrentSession();

    return (
        <div>
          <section className='container mx-auto py-8'>
            {JSON.stringify(user)}
          </section>
        </div>
    );
}

export default Home;