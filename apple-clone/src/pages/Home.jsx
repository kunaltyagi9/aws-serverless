import Header from "../components/Header";
import Info from "../components/Info";
import Section from "../components/Section";
import Products from "../components/Products";
import { productsSection } from "../constants/constant";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
    Auth: {
        region: process.env.REACT_APP_REGION,
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_CLIENTID
    }
})

const Home = () => {

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <>
                    <Header />
                    <Info />
                    <Section data={productsSection.iphonePro} />
                    <Section data={productsSection.iphone} />
                    <Section data={productsSection.macbookpro} />
                    <Products />
                </>
            )}
        </Authenticator>
    )
}

export default Home;