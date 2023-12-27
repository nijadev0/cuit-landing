<script setup>
//--------------------------------------------------------------------------------------------------------------//
useHead({
  title: "Cuit - Kebijakan Privasi",
});
//--------------------------------------------------------------------------------------------------------------//
const { $gsap } = useNuxtApp();

onMounted(() => {
  //--------------------------------------------------------------------------------------------------------------//
  // Hero Animation
  //--------------------------------------------------------------------------------------------------------------//
  const hero = document.querySelectorAll("#home-hero .home-hero-item");

  hero.forEach((item, i) => {
    $gsap.fromTo(
      item,
      {
        y: 96,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2",
        delay: i * 0.25,
      },
    );
  });
});
//--------------------------------------------------------------------------------------------------------------//
</script>

<template>
  <div
    v-if="show_loader"
    id="loader"
    class="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-white"
  >
    <NuxtImg class="h-auto w-24 animate-pulse lg:-mt-20" src="/cuit-logo.png" />
  </div>

  <div v-else>
    <!-- ------------------------------------ START - Hero ------------------------------------ -->
    <section
      class="relative mt-14 overflow-hidden pb-4 lg:mt-20 lg:h-[calc(100vh_-_48px)] lg:pb-8"
    >
      <div class="relative z-10 h-full w-full">
        <div
          class="absolute inset-0 h-full w-full bg-gradient-to-tl from-white/0 via-white/50 to-white/0"
        />

        <NuxtImg
          class="relative z-0 hidden h-full w-full object-cover object-center md:hidden lg:block"
          src="/hero-bg-1.png"
          alt="Hero Background 1"
          preload
        />
      </div>

      <NuxtImg
        class="hidden h-auto w-full object-contain md:block lg:hidden"
        src="/hero-bg-1-tablet.png"
        alt="Hero Background 1 Tablet"
        preload
      />

      <NuxtImg
        class="block h-auto w-full object-contain md:hidden lg:hidden"
        src="/hero-bg-1-mobile.png"
        alt="Hero Background 1 Mobile"
        preload
      />

      <div
        id="home-hero"
        class="container absolute left-1/2 top-1/2 z-10 mx-auto -mt-0 flex h-full w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 px-6 md:px-16 lg:-mt-20 lg:gap-6 lg:px-0"
      >
        <div class="overflow-hidden">
          <h1
            class="home-hero-item text-center text-2xl font-extrabold leading-tight md:text-3xl lg:text-4xl lg:font-extrabold lg:leading-tight xl:text-5xl xl:font-extrabold xl:leading-tight"
          >
            Kebijakan Privasi
          </h1>
        </div>
      </div>
    </section>
    <!-- ------------------------------------ END - Hero ------------------------------------ -->

    <!-- ------------------------------------ START - Content ------------------------------------ -->
    <section class="relative py-4 lg:py-8">
      <div
        class="policy-content container mx-auto w-full max-w-screen-xl px-6 py-6 md:px-16 lg:gap-0 lg:px-20 lg:py-16 2xl:px-10"
      >
        <h1 align="center">Data Privacy Policy</h1>
        <p align="center">
          Version: 1.1 Date: <br />
          June 8, 2023
        </p>

        <h2>INTRODUCTION</h2>
        <p>
          Welcome to Cuit's Privacy Policy! This Privacy Policy will explain how
          Cuit, PT Cerita Untuk Indonesia Tercinta, and/or its affiliates
          (<strong>"Cuit"</strong> or <strong>"We"</strong> or
          <strong>“Us”</strong>) collect, store, use, process, retain, transfer,
          safeguard, and protect your Personal Information as a user ("You" or
          "User" or “Your”). This Privacy Policy applies to you unless
          superseded by separate privacy policies.
        </p>
        <p>
          By using Cuit's services, you understand and agree that Cuit will
          collect, store, use, process, retain, transfer, display, disclose,
          safeguard, and protect your Personal Information as stated in this
          Privacy Policy. Cuit also expects you to understand and agree to the
          Terms of Use for Cuit users in conjunction with this Privacy Policy.
          The definitions used in this Privacy Policy refer to those already
          explained in Cuit's Terms of Use, unless otherwise specified in this
          Privacy Policy
        </p>

        <h2>SUMMARY</h2>
        <h3>Which Personal Information that we collect from Users?</h3>
        <p>
          Cuit will collect your Personal Information when you access and/or use
          Cuit. Cuit will also gather certain information related to the device
          you use and some other technical information that is present when you
          access and/or use Cuit.
        </p>
        <h3>How will Cuit use your Personal Information?</h3>
        <p>
          Cuit will use your Personal Information for the purpose of
          registration and management of your Cuit account, communication with
          you, and providing the best services to you. Cuit will also use your
          Personal Information to personalize Cuit according to user
          segmentation and develop Cuit's services to provide the best
          experience for users.
        </p>
        <h3>How will Cuit share your Personal Information?</h3>
        <p>
          To provide the best services, Cuit will share your Personal
          Information with third parties that are affiliated with Cuit. We may
          use these third parties or affiliates for the purpose of processing or
          storing your Personal Information. Cuit will also share your
          information with the Government and/or official Government authorities
          when required by applicable law.
        </p>
        <h3>How Cuit Stores Personal Information of the Users?</h3>
        <p>
          Cuit will store your Personal Information for the duration required
          for the processing of Personal Information, in accordance with the
          provisions of applicable law. Cuit will make efforts to store and
          protect your Personal Information to the highest standards through all
          possible means. However, it is important to note that you are solely
          responsible for maintaining the confidentiality of your Cuit account
          details, including but not limited to passwords and One-Time Passwords
          ("OTP") sent to you by Cuit.
        </p>
        <h3>How can you exercise your rights?</h3>
        <p>
          According to applicable law, you have certain rights regarding your
          Personal Information. To exercise these rights with Cuit, you can
          contact Cuit through the contact information provided in this Privacy
          Policy.
        </p>
        <h3>Contact us.</h3>
        <p>
          If you have any questions or complaints, you can contact Cuit through
          the contact information provided in this Privacy Policy.
        </p>

        <h2>1. PERSONAL INFORMATION THAT CUIT COLLECT</h2>
        <h3>Types of Personal Information that Cuit Collect from Users</h3>
        <p>
          If Users use Cuit, Cuit will collect information which identifies or
          can be used to identify, contact, or locate the person or the device
          to whom that information pertains (<strong
            >“Personal Information”</strong
          >). Personal Information that Cuit collect from Users including but
          not limited to:
        </p>
        <ol type="lower-alpha">
          <li>Name;</li>
          <li>Email address;</li>
          <li>Phone number;</li>
          <li>Gender identity;</li>
          <li>Place and date of birth;</li>
          <li>ID Photo;</li>
          <li>Photos including selfie photo, videos and/or sound;</li>
          <li>Location;</li>
          <li>Biometric information;</li>
          <li>Commercial information; and</li>
          <li>
            Technical information, such as about your use of Cuit as in app
            messages, in app search history, internet protocol (IP) addresses,
            information as previously or subsequently viewed web pages, duration
            of each visit/ session, internet device identity (ID) or media
            access control address, mobile advertising ID and other device
            information including information regarding the manufacturer, model
            and operating system of the device you use to access the Application
            and crash logs.
          </li>
        </ol>

        <h3>How Cuit Collects Your Personal Information</h3>
        <p>
          Cuit may collect The Personal Information of the Users through various
          ways that can be done and permitted under Applicable Law, such as:
        </p>
        <ol type="lower-alpha">
          <li><strong>Directly from Users</strong></li>
          <p>
            Cuit may receive Personal Information from Users when Users directly
            provide the Personal Information to Cuit, communicate with Cuit
            directly or through post, telephone, email, or other media, and/or
            when required by Applicable Law.
          </p>

          <li><strong>Indirectly</strong></li>
          <ol type="i">
            <li><strong>Whenever Users use Cuit</strong></li>
            <p>
              Cuit may receive Personal Information from Users whenever Users
              access and/or use Cuit application and services.
            </p>

            <ul>
              <li><strong>GPS</strong></li>
              <p>
                When Users access and/or use Cuit, Cuit will automatically track
                and collect your Personal Information in real-time. Users are
                required to turn on and give Cuit access to the Global
                Positioning System (<strong>“GPS”</strong>) or other location
                information feature in the device of the Users.
              </p>
              <p>
                If Users have given Cuit access to location in the Users device
                settings, Cuit will collect information about WiFi access points
                as well as other location information about longitude and
                latitude of Users and may save your device’s coordinates to
                offer certain features to Users. This information helps Cuit
                identify physical location of Users and to personalise Cuit and
                make it easier for Users to interact with other Users.
              </p>
              <p>
                Users may turn off the GPS feature for Cuit, but it might affect
                how Cuit provides the best service for Users.
              </p>

              <li><strong>Cookie</strong></li>
              <p>
                Cuit may receive Personal Information of the Users automatically
                through Cookie or other similar technologies. For your
                information, cookie is a small file that can be placed on your
                device or browser that allows us to recognise and remember
                Users.
              </p>

              <li><strong>Device Information</strong></li>
              <p>
                Cuit may automatically collect some information regarding the
                device of the Users which including but not limited to the
                unique device identifier, device model, and operating system,
                for several purposes, as set out in this policy whenever the
                Users are accessing and/or using Cuit. In addition, if you
                permit us to do so, the App may access your device’s address
                book solely to add someone to your contacts.
              </p>
            </ul>

            <li><strong>Information from third parties</strong></li>
            <p>
              Cuit may collect Personal Information of the Users from third
              parties (including but not limited to agent, supplier, contractor,
              Cuit’s partner, or any parties that are providing services to
              Cuit, collecting Personal Information of the Users, or cooperating
              with Cuit). In that case, Cuit will only collect Personal
              Information of the Users that are relevant with the cooperation
              purpose between Cuit and the third parties.
            </p>
          </ol>
        </ol>

        <h2>2. THE PURPOSE OF PERSONAL INFORMATION COLLECTION</h2>

        <p>
          Cuit main purpose by collecting Personal Information of the Users is
          to give the best possible user service experience to Users. By the
          Applicable Law, Cuit is required to inform the Users regarding Cuit
          legal basis, purpose of collecting, storing, and processing Personal
          Information of the Users as stated in this table below
        </p>

        <table>
          <tr>
            <th>Purpose for which Personal Information is used</th>
            <th>Types of Personal Information</th>
            <th>Source</th>
            <th>Legal Basis</th>
          </tr>
          <tr>
            <td>To provide users with Cuit social networking service;</td>
            <td>
              Name, email address, phone number, gender identity, and place and
              date of birth.
            </td>
            <td>You provide such Personal Information to Cuit.</td>
            <td>Contractual necessity</td>
          </tr>
          <tr>
            <td>
              To verify the identity of Users (“E-KYC Verification”), prevent
              fraud, and ensure the safety and security of the Users.
            </td>
            <td>
              Biometric information (generated from selfies), phone number,
              selfies, and ID photos (including information captured through OCR
              technology), geolocation, and device information.
            </td>
            <td>You provide the Personal Information to Cuit.</td>
            <td>
              Legitimate interest to ensure that accounts are not manipulated
              fraudulently and to protect the users of the website.
            </td>
          </tr>
          <tr>
            <td>To optimize the social networking feature of the Users.</td>
            <td>
              Optional information that you choose to provide in your profile,
              including through profile verification, which may include
              information about sexual preferences, gender, religion,
              background, ethnicity, photos, interests, and others.
            </td>
            <td>You provide the Personal Information to Cuit.</td>
            <td>
              Contractual interest and legitimate interest to facilitate
              networking opportunities in the Cuit application. For special
              categories/sensitive personal data, Cuit will rely on your
              explicit consent.
            </td>
          </tr>
          <tr>
            <td>
              To send you marketing information about Cuit or Cuit’s affiliates
              events, offers, and services.
            </td>
            <td>Name, email address, and phone number.</td>
            <td>You provide the Personal Information to Cuit.</td>
            <td>
              Consent or legitimate interest in accordance with applicable law
              for Cuit's marketing activities.
            </td>
          </tr>
          <tr>
            <td>
              To conduct development to assist Cuit in improving and enhancing
              Cuit's services.
            </td>
            <td>
              Technical information such as IP address, browser type, domain,
              accessed pages, mobile operator, search terms, images and videos,
              registration information, and profile information.
            </td>
            <td>
              You provide the Personal Information to Cuit. Regarding technical
              information, Cuit obtains it from the device you use to access
              Cuit.
            </td>
            <td>
              Legitimate interest in accordance with applicable law to analyze
              how you access and use Cuit's services and to test new
              technologies so that Cuit can further develop the Application,
              implement security measures, and enhance services.
            </td>
          </tr>
          <tr>
            <td>To respond to correspondence of the Users.</td>
            <td>
              Email address, IP address, social media handles, and phone number.
            </td>
            <td>
              You provide the Personal Information to Cuit. Regarding the IP
              address, Cuit obtains it from the device you use to access Cuit.
            </td>
            <td>
              Legitimate interest to respond to your inquiries in order to
              ensure that Cuit provides good services to users and resolves
              issues.
            </td>
          </tr>
          <tr>
            <td>
              To investigate and block Users reported infringements of Cuit
              Terms of Use.
            </td>
            <td>
              Name, profile information, message content, and photos + usage and
              technical information such as IP address and session IP
              information.
            </td>
            <td>
              You provide the Personal Information to Cuit and/or Cuit obtains
              it from the device you use to access Cuit.
            </td>
            <td>
              Legitimate interest to prevent fraudulent behavior and to maintain
              the security and integrity of Cuit's services.
            </td>
          </tr>
          <tr>
            <td>To allow Cuit to comply with the Applicable Law.</td>
            <td>
              All necessary and relevant Personal Information related to the
              relevant issue.
            </td>
            <td>
              You provide the Personal Information to Cuit, Cuit obtains
              Personal Information from your device, and/or Cuit obtains it from
              third parties or Cuit's affiliates, in accordance with the
              relevant purposes of information usage.
            </td>
            <td>
              Legitimate interest to protect Cuit's legal rights, defend legal
              claims, and to protect you and third parties from harm.
            </td>
          </tr>
        </table>

        <p>
          Cuit may collect the Personal Information of the Users that are
          outside the circumstances above, with the consent of the Users.
        </p>

        <h2>3. DISCLOSURE OF CUIT USERS PERSONAL INFORMATION</h2>

        <p>
          Cuit may disclose, allow access, and/or share Personal Information of
          the Users to Cuit third parties and/or affiliates. Furthermore, the
          disclosure purpose are including but not limited to:
        </p>

        <table>
          <thead>
            <tr>
              <th>Circumstances where Personal Information may be disclosed</th>
              <th>Disclosed Personal Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <strong>Service Providers:</strong> Cuit cooperate with
                  several third parties including our agents, vendors,
                  suppliers, contractors, partners (including our government
                  partner in carrying out the E-KYC verification process) and
                  any other who provide services to Cuit or You, perform
                  functions on our behalf, or whom we enter into commercial
                  collaboration with.
                </p>
                <p>
                  Where we share Personal Information with affiliates, we will
                  do so for the purposes of them helping us to provide Services,
                  to operate our business, or for the purpose of them conducting
                  data processing on our behalf.
                </p>
                <p>
                  All of our third parties and affiliates are committed to
                  processing the Personal Information that they receive from
                  Cuit in line with this Privacy Policy and Applicable Law.
                </p>
              </td>
              <td>
                Cuit may disclose all relevant Personal Information of the
                Users.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Legal Compliance and Law Enforcement:</strong> Cuit
                respects all the rights of the Users. Cuit will cooperate with
                other parties and/or government authorities to enforce the
                rights of the Users. In that condition, Cuit may disclose all
                the Personal Information of the Users. For your information,
                Cuit may raise or waive any legal objection or right available
                to Cuit.
              </td>
              <td>
                Cuit may disclose all relevant Personal Information of the
                Users.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Business Transfers:</strong> If Cuit or its affiliates
                undergoes a business transition or change of ownership,
                including but not limited to consolidation, mergers,
                acquisition, reorganisation, sale of all or a portion of its
                assets, or in the event of Suspension of Payment
                (<strong>“PKPU’</strong>) or Insolvency, for the purposes of
                such a transaction (even if the transaction is eventually not
                proceeded with).
              </td>
              <td>
                Cuit may disclose all relevant Personal Information of the
                Users.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Marketing Purpose:</strong> To help Cuit provide
                effective marketing and advertising by third pary to Users, Cuit
                may disclose all Personal Information of the Users.
              </td>
              <td>
                Cuit may disclose all relevant Personal Information of the
                Users.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          Cuit may disclose or share the Personal Information of the Users that
          are outside the circumstances above, with consent of the Users.
        </p>

        <h2>4. HOW CUIT RETAINS PERSONAL INFORMATION OF THE USERS</h2>

        <h3>How Cuit Retains the Personal Information of the Users</h3>

        <p>
          Cuit aware that Personal Information of the Users are important. Cuit
          will use all reasonable efforts to protect and secure the Personal
          Information of the Users against access, use, or disclosed by
          unauthorized person and unlawful, damage, loss, or similar risks.
          Although, please acknowledge that Cuit cannot guarantee that the
          transmission process 100% would be secured due to factors beyond Cuit
          control. So, Cuit suggests Users to do several things, such as:
        </p>

        <ol>
          <li>
            Please make sure that you log out of your account after use as you
            never know who may stumble onto your Account!
          </li>
          <li>
            Please don’t share the password you use to access your Cuit Account
            with anyone else!
          </li>
          <li>Change your password periodically.</li>
        </ol>

        <h3>Data Retention</h3>

        <p>
          Generally, Cuit will only hold the Personal Information of the Users
          as long as it is necessary to fulfill the purpose for which it was
          collected, or for as long as such retention is required or authorized
          by Applicable Law, or specifically for as long as you use Cuit’s
          Services. Cuit shall cease to retain Personal Information, or remove
          the means by which the Personal Information can be associated with you
          as and individual, as soon as it is reasonable assume that the purpose
          of which that Personal Information was collected is no longer being
          served by retention of Personal Information and retention is no longer
          necessary for legal or business purposes.
        </p>

        <p>
          Thus, there will be a case where Cuit will store the Personal
          Information of the Users longer than usual for a period not exceeding
          5 (five) years, such as:
        </p>

        <ol>
          <li>Required by the Applicable Law;</li>
          <li>
            Investigation of infringement indications of Cuit Terms of Use, Data
            Privacy Policy, or any other policies;
          </li>
          <li>Protect Cuit’s rights; or</li>
          <li>
            Regarding any legal claim, complaints, litigation, or any legal
            proceedings.
          </li>
        </ol>

        <p>
          You agree that Cuit may retain your Personal Information for a longer
          period if you consent to it.
        </p>

        <h2>5. RIGHTS OF USERS REGARDING THEIR PERSONAL INFORMATION</h2>

        <h3>Rights of Users</h3>

        <p>
          Users as the owner of the Personal Information may have certain rights
          under Applicable Law to request for access, correction and/or deletion
          of Personal information in our possession and control. To the extent
          these rights are available to you under Applicable Law, please visit
          Cuit Feedback Page or send us email at support@Cuit.com. Users also
          may contact Cuit through Cuit postmail in this following address: PT
          Lokal Orang Indonesia, Senayan Business Center, Jl. Senayan Nomor 39,
          Jakarta Selatan, 12180. As allowed by the Applicable Law, Cuit
          reserves the right to charge an administrative fee for any access
          and/or correction requests.
        </p>

        <p>
          Nevertheless, Cuit reserves the right to refuse Users requests for
          access to, correction of and/or deletion of, some or all of Users
          Personal Information in our possession or control if permitted or
          required under any Applicable Law. This may include circumstances
          where the Personal Information may contain references to other
          individuals or where there is no urgency for access or request to
          correct.
        </p>

        <h2>6. LIMITATION OF LIABILITY</h2>

        <p>
          Users will release, give compensation, and defend Cuit, including any
          officers, directors, employees, or agents of Cuit from and against any
          and all requests, claims, losses, responsibility, liabilities, costs,
          damages, and expenses (including but not limited to legal fees and
          compensation expenses) resulting directly or indirectly from:
        </p>

        <ol>
          <li>
            Any loss due to Personal Information that is intercepted, bugged,
            accessed, stolen, disclosed, changed, or destroyed by an
            unauthorized third party, due to factors beyond Cuit’s control
            and/or contrary to this Data Privacy Policy and the Applicable Law,
            including those resulting from User error or negligence;
          </li>
          <li>
            Collection, use, maintenance, sharing, or disclosure of data and
            information carried out on sites or applications owned, managed,
            and/or operated by third parties; or
          </li>
          <li>
            Any material or immaterial damages regarding any issues of Cuit’s
            features and services
          </li>
        </ol>

        <p>
          Cuit may notify Users if there is a change of this Data Privacy Policy
          from time to time directly through Cuit application or via email
          notification that Users registered with Cuit. Users are fully
          responsible to acknowledge any provisions changes regarding this Data
          Privacy Policy
        </p>

        <p>
          By continuing to use Cuit after changes to the Data Privacy Policy,
          you are deemed to know, understand, and give your consent to the
          changes to the provisions of the Data Privacy Policy and its
          amandement. Cuit recommend Users to periodically check the applicable
          Data Privacy Policy.
        </p>

        <p>
          However, Users may disagree with some or all the provisions in this
          Data Privacy Policy and its amandements, which can be done by closing
          the account as stated in the Terms of Use.
        </p>

        <h2>7. CONTACT US</h2>

        <p>
          If you have any questions or complaints regarding this Data Privacy
          Policy or Cuit's services, you can contact Cuit via:
        </p>

        <p>Email: <strong>support@cuit.com</strong></p>
        <p>Phone number: -</p>
      </div>
    </section>
    <!-- ------------------------------------ END - Content ------------------------------------ -->
  </div>
</template>

<style scoped>
.policy-content {
  @apply text-sm text-grey-concencrated;
}

.policy-content h1 {
  @apply mb-3 text-2xl font-semibold text-grey-concencrated;
}

.policy-content h2 {
  @apply mb-4 mt-10 text-xl font-semibold text-grey-concencrated first:mt-0;
}

.policy-content h3 {
  @apply mb-0.5 mt-4 text-base font-semibold text-grey-concencrated underline first:mt-0;
}

.policy-content p,
.policy-content ul,
.policy-content ol {
  @apply mb-3;
}

.policy-content ol,
.policy-content ul {
  @apply px-6;
}

.policy-content ol {
  list-style: revert;
}

.policy-content table {
  @apply mx-10 mb-4;
}

.policy-content tr {
  @apply border-b p-2.5 first:border-t;
}

.policy-content td,
.policy-content th {
  @apply border-r p-2.5 first:border-l;
}

.policy-content th {
  @apply text-base font-semibold;
}

.policy-content td {
  @apply align-top;
}
</style>
