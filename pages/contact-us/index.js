import Layout from '../../layout'
import { BreadCrumb } from '../../components';
// import Images from '/assets/images'
import { getHome } from "../api/home";

export async function getInitialProps(context) {
  // Fetch data from external API
  let menuCate = await getHome()

  // Pass data to the page via props
  return { props: { menuCate: menuCate } }
}
export default function ContactUs() {
    return (
        <Layout>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <BreadCrumb subTitle="Contact Us" />
                    <div className="name">Contact Us</div>
                    <div className="desc">This is the place of all the archives news, get it and make sure you always follow us
                        to
                        be up to dated all the time.</div>
                    <div className="form">
                        <div className="title">Any questions about recipes? Fill the form:</div>
                        <div className="form-group">
                            <div className="contact-form-control">
                                <label htmlFor="full-name">Your Full Name ( Required)</label>
                                <input type="text" id="full-name" />
                            </div>
                            <div className="contact-form-control">
                                <label htmlFor="email">Your Email ( Required)</label>
                                <input type="text" id="email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="contact-form-control">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" />
                            </div>
                            <div className="contact-form-control">
                                <label htmlFor="inqure">Inqure Type</label>
                                <input type="text" id="inqure" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="contact-form-control">
                                <label htmlFor="message">Your Message</label>
                                <input type="text" id="message" />
                            </div>
                        </div>
                        <div className="submit">
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="item">
                        <div className="img">
                            <img src="//assets/icons/contact-us-2.svg" alt="" />
                        </div>
                        <div className="title">Address</div>
                        <div className="desc">House #5, Road %#25, Dhanmondi, Dhaka - 256</div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src="//assets/icons/contact-us-3.svg" alt="" />
                        </div>
                        <div className="title">Emaill address</div>
                        <div className="desc">info@fintechx.com</div>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src="//assets/icons/contact-us-4.svg" alt="" />
                        </div>
                        <div className="title">Phone</div>
                        <div className="desc">+880 123 456 7890</div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}