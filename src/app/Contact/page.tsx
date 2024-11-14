import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.233240749432!2d67.01935457391797!3d24.92412304270991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fecd7dfa167%3A0x9719dc79e76d4cce!2s5b%201%2C%2016%20Nazimabad%20No.%205%2C%20Block%205%20Block%205%20A%20Block%205%20Nazimabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1730985051327!5m2!1sen!2s"
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            5B 1/16 Nazimabad no 5 Karachi no 18 
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-blue-500 leading-relaxed">m.rohanmirza2007@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">03361395949</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    name="contact-form"
  >
    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
        Contact Us:-
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600">
        Feel Free to Contact
      </p>
    <input
      type="hidden"
      name="access_key"
      defaultValue="800f4f22-b37e-4912-bc95-39b761eefc04"
    />
    <input type="text" name="Name" placeholder="Name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    <input type="text" name="Email" placeholder="Email" className="mt-4 w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    <input type="text" name="Phone Number" placeholder="Phone Number" className="mt-4 w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
    <textarea
      name="Message"
      rows={7}
      placeholder="Your Message"
      className="mt-4 w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      defaultValue={""}
    />
    <button className="text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
    <input type="submit" defaultValue="Submit" id="submit" />    
    </button>
    
  </form>
</div>

  </div>
</section>

    </div>
  )
}
export default Contact;