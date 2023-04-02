import React from 'react'

export default function FormContact() {
    return (
        <div className="form-contact">
            <div className="title">
                <h4>* These indices are products for
                    financial institutions, and are separate
                    from the prices that CoinDesk publishes on</h4>
            </div>
            <div className="wrap">
                <span>To find out more, please get in touch with our sales team using the form below.</span>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Work Email
                        </label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" placeholder="Work Email" />
                        </div>
                    </div>
                    <div className="button-send-contact">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
