"use client"

import { useState, useRef, useLayoutEffect } from "react"
import { ChevronDown, Share2, Heart, MessageCircle, Send, ThumbsUp, User } from "lucide-react"

const faqData = [
    {
        id: 1,
        refId: "products-optimization-job",
        question: "What is a Products Optimization job and who can do it?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    A <strong>Products Optimization job</strong> involves improving the visibility and ranking of products listed
                    on platforms like Amazon and eBay. The goal is to enhance product performance using real data, which leads to
                    better traffic, higher sales, and increased profitability for merchants.
                </p>
                <p>
                    This job is powered by AI, but requires crucial{" "}
                    <span className="font-semibold text-emerald-400">human involvement</span> for authenticity and effectiveness.
                </p>
                <p>
                    <span className="font-semibold">Who can do it?</span> You don't need to be an SEO expert. Anyone with a mobile
                    phone and internet connection can participate. All backend optimization techniques are managed by AI, your job
                    is to contribute your presence and human verification to make the process real and trustworthy.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>No technical skills or purchases required</li>
                    <li>Instant payments and daily commissions</li>
                    <li>Flexible work hours (part-time & remote)</li>
                    <li>No personal information needed</li>
                </ul>
                <p>
                    <span className="font-semibold text-emerald-400">Why is human involvement important?</span> AI can automate
                    many tasks, but platforms like Amazon and eBay require genuine human signals to ensure the process is not
                    manipulated by bots. Human interaction provides:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Real engagement and behavior patterns</li>
                    <li>Trust signals for product authenticity</li>
                    <li>Verification that AI cannot fake</li>
                </ul>
                <p>
                    <em className="text-sm text-gray-400">
                        For example, when a product is optimized through AI alone, it may lack the human touch needed to pass
                        platform authenticity checks. Your participation ensures those checks are passed, making the product rank
                        higher and perform better.
                    </em>
                </p>
                <p>
                    <strong className="text-emerald-400">Common Concern:</strong> "If I'm not buying or using a product, how can I
                    give feedback or help promote it without lying?"
                </p>
                <p>
                    Great question! You are <strong>not</strong> giving reviews or making false claims. You are simply assisting
                    our AI system in understanding how real users interact with certain product listings, such as clicking,
                    searching, and spending time on them. This helps train the algorithm to improve product positioning on
                    platforms. It's <span className="font-semibold">completely ethical</span> and similar to how digital marketers
                    test user behavior to improve online visibility.
                </p>
            </div>
        ),
        category: "Job Overview",
    },
    {
        id: 2,
        refId: "how-it-works",
        question: "How does the job work?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>The job is simple and requires no technical skills. Here's how it works:</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>
                        <strong>Sign Up:</strong> Register with your WhatsApp number and get instant access to the platform.
                    </li>
                    <li>
                        <strong>Receive Tasks:</strong> You'll receive product optimization tasks daily based on your VIP level.
                    </li>
                    <li>
                        <strong>Complete Tasks:</strong> Follow simple instructions to interact with products (view, click, search).
                    </li>
                    <li>
                        <strong>Get Paid:</strong> Earn commissions instantly after completing each task set.
                    </li>
                </ol>
                <div className="bg-gray-800 border border-emerald-300 rounded-md p-4">
                    <h4 className="text-emerald-400 font-semibold mb-2">📊 VIP Levels & Daily Earnings</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            <strong>VIP Level 1:</strong> 3 sets/day &mdash;{" "}
                            <span className="text-emerald-400 font-semibold">$50 base salary</span>
                        </li>
                        <li>
                            <strong>VIP Level 2:</strong> 4 sets/day &mdash;{" "}
                            <span className="text-emerald-400 font-semibold">$200 base salary</span>
                        </li>
                        <li>
                            <strong>VIP Level 3:</strong> 5 sets/day &mdash;{" "}
                            <span className="text-emerald-400 font-semibold">$500 base salary</span>
                        </li>
                        <li>
                            <strong>VIP Level 4:</strong> 6 sets/day &mdash;{" "}
                            <span className="text-emerald-400 font-semibold">$1000 base salary</span>
                        </li>
                    </ul>
                </div>
                <p>
                    💡 <span className="font-semibold">Commissions</span> are also awarded in addition to the base salary, based
                    on the performance of the products you've helped optimize. The more sets you complete and the better the
                    results, the more you earn.
                </p>
                <p className="italic text-sm text-gray-400">
                    For example, a user at VIP Level 2 optimizing 4 sets per day can earn a $200 base salary plus additional
                    commissions based on product performance.
                </p>
            </div>
        ),
        category: "How It Works",
    },
    {
        id: 3,
        refId: "getting-paid",
        question: "How will I get paid, and why is payment made through cryptocurrency?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    All payments for the <strong>Products Optimization job</strong> are made through{" "}
                    <span className="font-semibold text-emerald-300">digital currency</span> such as{" "}
                    <strong>USDT, ETH, or BTC</strong>. You can receive your earnings directly into any trusted digital wallet,
                    including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Cash App</li>
                    <li>MetaMask</li>
                    <li>Trust Wallet</li>
                    <li>Coinbase</li>
                    <li>Crypto.com</li>
                </ul>
                <p>
                    💡 <strong>Note:</strong> Payments are{" "}
                    <span className="text-emerald-300 font-semibold">not sent in local currency</span> (such as INR, AED, or USD),
                    and are not processed via local banks. This is because the company operates{" "}
                    <span className="font-semibold">globally</span> and uses a unified, secure system to manage cross-border
                    payments.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-300 p-4 rounded-md text-sm text-gray-300">
                    🌍 <strong>For Example:</strong> If you're working from the UK, the company cannot transfer pounds directly to
                    your local bank. Similarly, it can't send AED to Dubai or INR to India due to international financial
                    limitations. That's why digital currency is the most flexible and borderless solution.
                </div>
                <p>
                    🔐 <strong>Is Crypto Safe?</strong> Yes! While it's true that many scams have been associated with crypto,
                    this platform uses{" "}
                    <span className="font-semibold text-green-300">verified wallets and secure blockchain networks</span>. You are
                    not investing in , you are only using it as a payment method. That makes it 100% safe.
                </p>
                <p>
                    🚫 <span className="text-red-500 font-semibold">You are not being asked to trade crypto.</span> You're simply
                    receiving your earned salary in a widely accepted, decentralized format. The company even pays the
                    transaction/gas, <span className="italic">you get the full amount without deductions</span>.
                </p>
                <p>
                    💼 This is part of a fast-growing global shift toward digital finance. Just like emails replaced letters,{" "}
                    <strong>digital currency is replacing traditional payments</strong>. It's faster, borderless, and
                    tax-efficient. Major companies and governments are also exploring or implementing crypto-based solutions.
                </p>
                <p className="italic text-sm text-gray-400">
                    Think of it like receiving a digital , easy to store, easy to withdraw, and globally accessible.
                </p>
                <p>
                    If you're new to this, don't , we'll guide you step by step on how to set up a wallet and receive your
                    payments securely.
                </p>
            </div>
        ),
        category: "Payments & Wallets",
    },
    {
        id: 4,
        refId: "job-discussion-over-whatsapp",
        question: "Is it unprofessional to discuss this job over WhatsApp?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    That's a very valid, and we understand your concern. While email and portals are common for corporate jobs,
                    for roles like <strong>Products Optimization</strong> that require real-time coordination and step-by-step
                    training,{" "}
                    <span className="font-semibold text-emerald-300">
                        WhatsApp is actually one of the most effective communication tools
                    </span>
                    .
                </p>
                <p>📱 With WhatsApp, we're able to:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        Guide you with <strong>visual step-by-step instructions</strong> (using arrows and screenshots)
                    </li>
                    <li>Respond to your queries in real-time, without long delays</li>
                    <li>Send voice notes or screen recordings for better clarity</li>
                    <li>Provide direct updates on your earnings, training, and task notifications</li>
                    <li>Keep the conversation secure and private with end-to-end encryption</li>
                </ul>
                <p>
                    📚 In our upcoming <strong>training sessions</strong>, we use WhatsApp to share interactive content, explain
                    dashboard usage, and mark screen elements with arrows and highlights—something that email or static platforms
                    cannot do as effectively.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-300 p-4 rounded-md text-sm text-gray-700">
                    💼 <strong>Many reputed companies</strong> and remote job providers use WhatsApp to hire and onboard new
                    employees. Examples include:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>
                            <strong>Amazon Delivery Partners</strong> use WhatsApp for onboarding new riders
                        </li>
                        <li>
                            <strong>Upwork clients</strong> often coordinate and interview freelancers via WhatsApp
                        </li>
                        <li>
                            <strong>Local and international BPOs</strong> use WhatsApp for hiring and scheduling
                        </li>
                    </ul>
                </div>
                <p>
                    ✨ In short, WhatsApp is not only easy and fast—but also secure, visual, and extremely convenient. It allows
                    us to offer you a <span className="font-semibold text-emerald-300">personalized experience</span>, where
                    you're never left confused or stuck.
                </p>
                <p className="italic text-sm text-gray-400">
                    So don't worry—this isn't unprofessional. It's a smarter, modern way of keeping you fully supported at every
                    step.
                </p>
            </div>
        ),
        category: "Communication & Onboarding",
    },
    {
        id: 14,
        refId: "link-issues",
        question: "Why am I facing issues opening the platform link to create my account? What should I do?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    It's completely normal to encounter some warnings or errors when opening the platform link for the first time.{" "}
                    <span className="font-semibold text-emerald-300">The link is highly secure and private</span>, because you
                    will be creating your working account here where you'll generate your earnings. So, sometimes it might not
                    open smoothly on a new device or network, and that's why you see these security warnings.
                </p>
                <p>
                    Don't worry, this is a common step and part of keeping your data safe. We want you to feel confident and
                    supported, not stuck or confused.
                </p>
                <p>Here are some easy solutions you can try to get the link working:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>If you're connected to WiFi, try switching to mobile data and open the link again.</li>
                    <li>If it still doesn't work, disconnect from WiFi and try again.</li>
                    <li>
                        If the problem persists, contact your trainer right away.{" "}
                        <span className="font-semibold text-emerald-300">
                            Your trainer can provide you with a different secure link
                        </span>{" "}
                        to access the platform.
                    </li>
                    <li>
                        Try opening the link in the Chrome browser instead of Safari or any other browser, as Safari sometimes
                        causes these issues.
                    </li>
                    <li>If you're on mobile, try using a computer with Chrome browser for a smoother experience.</li>
                </ul>
                <p>
                    <strong>Remember:</strong> Don't give up after one try! These hiccups happen, but with a little patience and
                    the right help from your trainer, you'll get through easily.
                </p>
                <p>
                    💡 <span className="font-semibold text-emerald-300">Why it's worth the effort:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>🎉 You'll receive a $25 welcome bonus as soon as you create your account.</li>
                    <li>
                        📈 During training, a special training account will be created under yours. You'll earn 15% of the profits
                        generated from that account, credited directly to your personal account through your invitation code.
                    </li>
                    <li>✅ You officially become a registered member, unlocking many more benefits as you progress.</li>
                </ul>
                <p>
                    The training is designed to make everything simple and clear for you, and by completing the account setup, you
                    open doors to all these advantages.
                </p>
                <p className="italic text-sm text-gray-400">
                    So relax, take your time, and cooperate with your trainer. We're here to help you every step of the way,
                    because your success is our success!
                </p>
            </div>
        ),
        category: "Issues with the platform link and its solutions",
    },
    {
        id: 15,
        refId: "lucky-orders-and-negative-balance",
        question: "What are Lucky Orders and why does my balance show negative?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    <strong>What are Lucky Orders?</strong>
                    <br />
                    Lucky Orders (or Combo Orders) are rare and special orders that are randomly assigned by the system to users
                    who get a streak of beginner's luck. Not everyone receives them, and most people may only get 1 or 2 over
                    years of working.
                </p>
                <p>
                    <strong>Why does my balance go negative when I get one?</strong>
                    <br />
                    When you receive a Lucky Order, your balance might show as negative. This doesn't mean you've lost money, it
                    just means the order's value is higher than your current balance. It's a temporary situation and is more
                    common in training accounts.
                </p>
                <p>
                    <strong>How much commission can I earn from Lucky Orders?</strong>
                    <br />
                    Commissions from Lucky Orders can be extremely high, sometimes 5x, 10x, or even up to 200x more than regular
                    orders. That's why people get excited about them; they offer a chance to earn significantly more in a single
                    order.
                </p>
                <p>
                    <strong>Are Lucky Orders a scam? Why are product optimization jobs being questioned?</strong>
                    <br />
                    Great question, and an important one. Every legitimate company faces copycat scams trying to exploit their
                    name and workflow. Recently, some scammers have tried mimicking our system, especially by falsely offering
                    "Lucky Orders" to gain people's trust.
                </p>
                <p>
                    Here's the difference: <br />
                    In Nexxen's real system, Lucky Orders are rare and completely random, we can't control or assign them at will.
                    Scammers, on the other hand, create fake systems where they hand out Lucky Orders anytime, which is a red
                    flag.
                </p>
                <p>
                    Our legal team is actively tracking and taking action against these scams. If you're unsure whether an order
                    is real, just click <strong>RECORDS</strong> on the bottom right of your dashboard and send a screenshot to
                    your trainer, They'll help you verify it.
                </p>
                <p className="italic text-sm text-gray-400">
                    <strong>Reminder:</strong> Don't get discouraged or confused by misinformation. Stay focused, cooperate with
                    your trainer, and always confirm before assuming anything. You could be just one real Lucky Order away from a
                    big commission!
                </p>
                <p>Stay alert, stay smart, and make the most of your opportunity. 💪</p>
            </div>
        ),
        category: "Lucky Orders & Earnings",
    },
    {
        id: 16,
        refId: "initial-funds",
        question: "Do I need to add any funds to my wallet before starting this job?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    One of the most common questions new users ask is:{" "}
                    <span className="font-semibold text-emerald-300">
                        "Why am I being asked to add money when I joined to earn, not spend?"
                    </span>{" "}
                    , and that's a very valid concern. So let us explain clearly and honestly.
                </p>
                <p>
                    The job involves completing <strong>3 daily sets</strong> after your training is over. These are simple tasks
                    you'll complete from your personal account, and your daily earnings for these sets (at{" "}
                    <span className="text-emerald-300 font-semibold">VIP Level 1</span>) usually range between{" "}
                    <strong>$180 to $200</strong>.
                </p>
                <p>
                    But to complete those daily sets and withdraw your earnings, the system requires your account to maintain a{" "}
                    <strong>minimum balance of $100</strong>. This is not a fee or a charge, it's just a working balance required
                    by the platform to validate the completion of your sets.
                </p>
                <p>
                    Now, here's the good part:{" "}
                    <span className="font-semibold text-emerald-300">
                        New users are not expected to deposit this $100 upfront.
                    </span>{" "}
                    Instead, you go through a short training phase first. In this phase, a training account is created using your
                    invitation code, and the profits from that account automatically credit{" "}
                    <strong>15% directly into your own account.</strong>
                </p>
                <p>
                    Most users easily earn more than $100 from this training, so they don't have to add anything from their own
                    pocket. Even if someone falls slightly short, it's usually just a few bucks (around $15 to $19).
                </p>
                <p>
                    <strong>And here's the key point:</strong> The small amount you might add is:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>❌ Not an investment</li>
                    <li>❌ Not a payment or a fee</li>
                    <li>❌ Not something you're giving to anyone</li>
                    <li>✅ Just a temporary hold in your own account to meet the system's balance criteria</li>
                </ul>
                <p>
                    As soon as you complete your sets,{" "}
                    <span className="font-semibold text-emerald-300">
                        you withdraw not only your earnings but also these few bucks
                    </span>{" "}
                    , they're never taken from you. You're just holding them briefly, like moving money from one pocket to the
                    other.
                </p>
                <p>
                    💡 <span className="font-semibold text-emerald-300">So why is it worth it?</span>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>🚀 You start earning $180–$200 per day immediately after training.</li>
                    <li>📈 You already earn during training without needing to add money.</li>
                    <li>🔐 You're always in control, nothing is ever taken from your account without your action.</li>
                    <li>✅ It's not a fee, it's a tool to unlock your full earning potential.</li>
                </ul>
                <p>
                    So don't let a small temporary hold stop you from unlocking a real daily income.{" "}
                    <strong className="text-emerald-300">It's not a risk, it's a step forward.</strong>
                </p>
                <p className="italic text-sm text-gray-400">
                    Still confused? Don't worry, your trainer should be there with you to guide you through every step, and you'll
                    never be alone in the process. Your success is our goal.
                </p>
            </div>
        ),
        category: "Do I need to add anything out of my own pocket?",
    },
    {
        id: 17,
        refId: "cashapp-scam-warning",
        question: 'Why is Cash App showing warnings like "Scam Detected" when I try to send the first transaction?',
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    Great question, and you're definitely not the only one who's seen this. A lot of new users get worried when
                    Cash App shows messages like <span className="font-semibold text-red-600">"Scam Detected"</span> or{" "}
                    <span className="font-semibold text-red-600">"This looks suspicious"</span> on their first or second BTC
                    transaction.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">But here's the truth:</span> These warnings are{" "}
                    <strong>completely normal</strong>, especially when you're sending Bitcoin for the first time, or even using
                    an address that's not in your frequent list.
                </p>
                <p>
                    Cash App is very protective of your funds, and that's a good thing. Their system often flags even perfectly
                    safe transactions just to make sure you double-check. In fact, even if you're sending to your own friend or
                    family, these warnings can still appear.
                </p>
                <p>So what should you do if you see this warning and the transaction won't go through?</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>✅ Don't panic, this is routine.</li>
                    <li>
                        ✅ Contact <strong>Nexxen Customer Support</strong> and tell them you need a{" "}
                        <span className="font-semibold">new and fresh BTC deposit address</span>.
                    </li>
                    <li>✅ Once you receive the new address, try your transaction again using that one.</li>
                    <li>✅ Even if you see the same warnings, go ahead, your transaction will process this time.</li>
                </ul>
                <p>
                    <span className="font-semibold text-emerald-300">Should you ignore the warning?</span> Yes, in this context,
                    you can safely ignore it. You're not sending money to a stranger; you're completing a step your trainer has
                    guided you through, using the official Nexxen deposit process.
                </p>
                <p>
                    The Cash App warning is just automated, it doesn't mean your transaction is unsafe. If anything ever goes
                    wrong, your trainer and our team are here to assist.
                </p>
                <p className="text-sm italic text-gray-400">
                    💡 If you'd still like additional reassurance, you can look up{" "}
                    <a
                        href="https://cash.app/help/us/en-us/6480-bitcoin-withdrawal-limitations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        Cash App's official documentation
                    </a>{" "}
                    about how they monitor BTC transactions, they clearly mention that they may block or warn on certain transfers
                    just as a precaution.
                </p>
                <p>
                    🧠 Bottom line?{" "}
                    <span className="font-semibold text-emerald-300">
                        Trust your trainer, follow the official instructions, and stay calm.
                    </span>{" "}
                    These warnings are just digital speed bumps, they're there to protect you, not to stop you.
                </p>
            </div>
        ),
        category: "Why do I see Scam warning in Cash App?",
    },
    {
        id: 18,
        refId: "cashapp-bitcoin-buying-concerns",
        question: "Why do I feel scared or suspicious when buying Bitcoin on Cash App? Is it a scam?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    It's completely normal to feel a bit scared or suspicious when buying Bitcoin on Cash App, especially because
                    there's been a lot of news about Bitcoin scams lately.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">But here's the important truth:</span> Buying Bitcoin on Cash
                    App is <strong>safe and secure</strong>. Cash App is a trusted digital wallet backed by Square, a publicly
                    traded company used by millions worldwide.
                </p>
                <p>
                    Bitcoin, like any financial asset, can sometimes feel confusing or risky because of its volatility and the
                    complex technology behind it. But Cash App has built-in protections and strict security protocols to keep your
                    funds safe.
                </p>
                <p>
                    <span className="font-semibold">Here are some strong reasons to trust the process:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>✅ Cash App uses industry-standard encryption to protect your transactions and data.</li>
                    <li>
                        ✅ They comply with strict financial regulations and anti-fraud systems to detect suspicious activity.
                    </li>
                    <li>
                        ✅ Your Bitcoin purchase is recorded on the blockchain, a public, transparent ledger that anyone can verify.
                    </li>
                    <li>✅ Millions of users worldwide have safely bought and sold Bitcoin through Cash App with no issues.</li>
                </ul>
                <p>
                    If you ever feel unsure, take a moment to double-check transaction details and confirm addresses exactly. And
                    remember, your trainer and Nexxen support are here to guide you step-by-step.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">Pro tip:</span> You can also verify your Bitcoin holdings
                    anytime using public blockchain explorers. This transparency is one of Bitcoin's biggest strengths, you can
                    prove your coins exist and belong to you.
                </p>
                <p>
                    So, don't let fear hold you back. Buying Bitcoin on Cash App is a safe, official process, just follow the
                    instructions carefully, stay informed, and reach out for help whenever you need it.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">
                        We also understand that trusting a digital wallet is one thing, but trusting your guide and support team is
                        equally important.
                    </span>{" "}
                    That's why our Nexxen trainers and customer support are dedicated to helping you at every step, making sure
                    your experience is smooth, secure, and scam-free. You're never alone, we stand by your side to protect your
                    investment and answer any questions.
                </p>
                <p className="text-sm italic text-gray-400">
                    💡 For more reassurance, check out{" "}
                    <a
                        href="https://cash.app/help/us/en-us/6480-bitcoin-withdrawal-limitations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        Cash App's official Bitcoin buying guide
                    </a>{" "}
                    and their security features.
                </p>
                <p>
                    🧠 <span className="font-semibold text-emerald-300">Bottom line?</span> Your doubts are normal, but the system
                    is designed to protect you. Trust the digital wallet, trust your trainer, and take one step at a time, you've
                    got this!
                </p>
            </div>
        ),
        category: "Is buying Bitcoin on Cash App safe?",
    },
    {
        id: 20,
        refId: "trainer-cannot-help-minimum-balance",
        question: "Can my trainer help me with the few dollars needed to complete the minimum balance or verification?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    It's totally normal to wonder why your trainer can't help you with the small amount needed to meet the minimum
                    balance, especially when it's just a few bucks. But there's a very important reason behind this rule.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">To be clear:</span> Trainers are{" "}
                    <strong>strictly not allowed</strong> to assist with funds related to meeting the minimum balance requirement,
                    even if it's just a few dollars.
                </p>
                <p>
                    That initial amount you add, often $10 to $20, is more than just money. It's a form of{" "}
                    <strong>human verification</strong>. It proves that you're a real person, that you're genuinely ready to
                    participate, and that you're in control of your own payment method.
                </p>
                <p>
                    <span className="font-semibold">Why is this so important?</span> Because in this line of work, human
                    verification is a security requirement. It helps protect both you and the platform from fraud, automation, or
                    unauthorized access.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>✅ It confirms you're not using someone else's identity or account.</li>
                    <li>✅ It builds trust with the system and your training team.</li>
                    <li>✅ It ensures all members take full responsibility for their participation.</li>
                </ul>
                <p>
                    If a trainer were to lend or send you that amount, even with good intentions, it would bypass the verification
                    process, which defeats the purpose. That's why this rule exists and is non-negotiable.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">Bottom line:</span> Human verification is essential, and for
                    that reason, <strong>you must personally fund the minimum balance requirement</strong>. Trainers are here to
                    guide and support you, but they cannot handle or cover this step for you.
                </p>
                <p className="text-sm italic text-gray-400">
                    💡 This policy keeps the system fair, secure, and trustworthy for everyone involved. Once you complete this
                    step, your trainer will be fully ready to walk you through everything else.
                </p>
            </div>
        ),
        category: "Trainer policies and human verification",
    },
    {
        id: 21,
        refId: "no-money-hesitation-faq",
        question: "What if I don't even have a few dollars to get started? Is this job still for me?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    This is a question we hear a lot: <em>"I don't even have a few bucks right now."</em> And while it might sound
                    like a simple excuse, we take it seriously, because it's not really about the money. It's about mindset,
                    understanding, and belief in what's possible.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">Let's be honest:</span> It's hard to believe that someone
                    living in the U.S. truly can't access a few dollars, even just temporarily. What's more likely is that they're
                    unsure about this opportunity, they don't yet trust the process, or they simply don't realize how powerful
                    this job can be financially.
                </p>
                <p>And that's okay, we get it. Skepticism is normal at the start. But here's what we want you to realize:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>
                        💵 This is a real income opportunity with <strong>real earning potential</strong>, not just a side gig, but
                        something that can genuinely impact your financial future.
                    </li>
                    <li>
                        🚀 The moment you complete your setup, you could start seeing earnings as high as{" "}
                        <strong>$200+ immediately</strong>, and that's just the beginning.
                    </li>
                    <li>
                        💼 You're not buying a product, you're unlocking access to a skill-based system that rewards effort,
                        consistency, and smart work.
                    </li>
                </ul>
                <p>
                    So when someone says, "I don't have a few bucks," what we really hear is, "I'm not convinced this is worth it
                    yet." And that's exactly where we want to help shift your mindset.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">Think about it this way:</span> If you knew with confidence
                    that putting in a small amount today would lead to $200 or more in your hands within days, wouldn't you figure
                    out a way to come up with that?
                </p>
                <p>
                    Most people would. And many do. Because once you realize the value of what's in front of you, that small
                    amount stops looking like a burden, and starts looking like a doorway.
                </p>
                <p>
                    <span className="font-semibold">Here's the truth:</span> That $200+ is already waiting for you. It's not a
                    dream, it's not hype, it's just one step away. You just need to unlock it by completing this small but crucial
                    setup.
                </p>
                <p>
                    <span className="font-semibold text-emerald-300">Bottom line:</span> Don't let a few dollars today block
                    hundreds, or even thousands, of dollars tomorrow. This is your chance to change your financial path. Be
                    resourceful, stay committed, and trust the process. You'll be amazed at what happens when you just take that
                    first step.
                </p>
                <p className="text-sm italic text-gray-400">
                    💡 Still unsure? Reach out to your trainer. They're here to guide you, answer your questions, and help you get
                    started the smart way.
                </p>
            </div>
        ),
        category: "What if I don't even have a few dollars to get started? Is this job still for me?",
    },
    {
        id: 22,
        refId: "how-to-reset-task-access-remaining-sets",
        question: "How do I reset my task and access the remaining sets?",
        answer: (
            <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                    If your task has been paused and you need to reset it to access the remaining sets, don't worry, the process
                    is easy and can be done in just a few steps, even if you've never used a digital wallet before.
                </p>
                <p>
                    You'll need to make a small crypto deposit (usually around <strong>$17 to $19</strong>) to restart your task.
                    Here's exactly how to do it:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>
                        <span className="font-semibold">Buy crypto worth the required amount.</span> You can purchase{" "}
                        <strong>Bitcoin (BTC)</strong>, <strong>Ethereum (ETH)</strong>, or <strong>USDT (Tether)</strong>, any one
                        of these works. Use a digital wallet or platform like PayPal, Cash App, Binance, Coinbase, or Trust Wallet.
                    </li>
                    <li>
                        <span className="font-semibold">Contact Nexxen customer service.</span> Tell them which crypto you bought,
                        and they'll give you the correct deposit address. For example, if you bought ETH, ask for the ETH deposit
                        address.
                    </li>
                    <li>
                        <span className="font-semibold">Send the crypto to the provided address.</span> Open your wallet or app, and
                        send the amount you purchased to the deposit address. Make sure you're sending the right type of crypto to
                        the right address.
                    </li>
                    <li>
                        <span className="font-semibold">Save the transaction receipt.</span> Once your transaction is complete, take
                        a screenshot or copy the transaction ID from your app.
                    </li>
                    <li>
                        <span className="font-semibold">Send the receipt + your Nexxen username to customer service.</span> This
                        helps verify your deposit and makes sure it's added to your account.
                    </li>
                    <li>
                        <span className="font-semibold">Wait for confirmation.</span> Once confirmed, your task will be reset and
                        the remaining sets will be unlocked. You can now continue where you left off!
                    </li>
                </ol>
                <p>
                    <span className="font-semibold text-emerald-300">That's it!</span> It's a simple one-time step to move
                    forward, and if you ever need help, Nexxen support is here for you.
                </p>
                <p className="text-sm italic text-gray-400">
                    💡 Tip: If you're not sure how to buy or send crypto, just let support know. They'll walk you through it one
                    step at a time.
                </p>
            </div>
        ),
        category: "How do I reset my task and access the remaining sets?",
    },
]

// Mock users for demonstration
const mockUsers = [
    { id: 1, name: "Sarah Johnson", avatar: "SJ", verified: true },
    { id: 2, name: "Mike Chen", avatar: "MC", verified: false },
    { id: 3, name: "Emma Davis", avatar: "ED", verified: true },
    { id: 4, name: "Alex Rodriguez", avatar: "AR", verified: false },
    { id: 5, name: "Lisa Wang", avatar: "LW", verified: true },
    { id: 6, name: "John Smith", avatar: "JS", verified: false },
    { id: 7, name: "Maria Garcia", avatar: "MG", verified: true },
    { id: 8, name: "David Kim", avatar: "DK", verified: false },
    { id: 9, name: "Nina Patel", avatar: "NP", verified: true },
    { id: 10, name: "Kevin Brown", avatar: "KB", verified: false },
    { id: 11, name: "Olivia Thompson", avatar: "OT", verified: true },
    { id: 12, name: "Daniel Lee", avatar: "DL", verified: false },
    { id: 13, name: "Ava Martinez", avatar: "AM", verified: true },
    { id: 14, name: "Liam Walker", avatar: "LW", verified: false },
    { id: 15, name: "Chloe Adams", avatar: "CA", verified: true },
    { id: 16, name: "Ethan Turner", avatar: "ET", verified: false },
    { id: 17, name: "Grace Hall", avatar: "GH", verified: true },
    { id: 18, name: "Noah Young", avatar: "NY", verified: false },
    { id: 19, name: "Sophia Clark", avatar: "SC", verified: true },
    { id: 20, name: "Jackson Wright", avatar: "JW", verified: false },
    { id: 21, name: "Isabella Scott", avatar: "IS", verified: true },
    { id: 22, name: "Benjamin Lopez", avatar: "BL", verified: false },
    { id: 23, name: "Zoe Hill", avatar: "ZH", verified: true },
    { id: 24, name: "Ryan Green", avatar: "RG", verified: false },
    { id: 25, name: "Mia Rivera", avatar: "MR", verified: true },
    { id: 26, name: "Dylan Carter", avatar: "DC", verified: true },
    { id: 27, name: "Hailey Nguyen", avatar: "HN", verified: false },
    { id: 28, name: "Jason Brooks", avatar: "JB", verified: true },
    { id: 29, name: "Samantha Lee", avatar: "SL", verified: false },
    { id: 30, name: "Tyler Scott", avatar: "TS", verified: true },
    { id: 31, name: "Emily Ross", avatar: "ER", verified: false },
    { id: 32, name: "Anthony Reed", avatar: "AR", verified: true },
    { id: 33, name: "Brianna Knight", avatar: "BK", verified: false },
    { id: 34, name: "Caleb Foster", avatar: "CF", verified: true },
    { id: 35, name: "Jasmine Ali", avatar: "JA", verified: false },
    { id: 36, name: "Logan Murphy", avatar: "LM", verified: true },
    { id: 37, name: "Ella Simmons", avatar: "ES", verified: false },
    { id: 38, name: "Nathan Price", avatar: "NP", verified: true },
    { id: 39, name: "Ariana Bell", avatar: "AB", verified: false },
    { id: 40, name: "Sean Matthews", avatar: "SM", verified: true },
    { id: 41, name: "Madison Harper", avatar: "MH", verified: false },
    { id: 42, name: "Isaac Long", avatar: "IL", verified: true },
    { id: 43, name: "Victoria Park", avatar: "VP", verified: false },
    { id: 44, name: "Gavin Reed", avatar: "GR", verified: true },
    { id: 45, name: "Nicole Torres", avatar: "NT", verified: false },
    { id: 46, name: "Owen Ellis", avatar: "OE", verified: true },
    { id: 47, name: "Kayla Barnes", avatar: "KB", verified: false },
    { id: 48, name: "Tristan Webb", avatar: "TW", verified: true },
    { id: 49, name: "Hannah Cruz", avatar: "HC", verified: false },
    { id: 50, name: "Adrian Scott", avatar: "AS", verified: true },
    { id: 51, name: "Bella Singh", avatar: "BS", verified: false },
    { id: 52, name: "Miles Hunt", avatar: "MH", verified: true },
    { id: 53, name: "Lily Chen", avatar: "LC", verified: false },
    { id: 54, name: "Jordan Blake", avatar: "JB", verified: true },
    { id: 55, name: "Stella Morgan", avatar: "SM", verified: false },
    { id: 56, name: "Cole Andrews", avatar: "CA", verified: true },
    { id: 57, name: "Riley Hayes", avatar: "RH", verified: false },
    { id: 58, name: "Vanessa Moore", avatar: "VM", verified: true },
    { id: 59, name: "Leo Fernandez", avatar: "LF", verified: false },
    { id: 60, name: "Amber Patel", avatar: "AP", verified: true },
]

// Mock initial comments data
const initialComments = {
    1: [
        {
            id: 1,
            userId: 5,
            text: "I’ve been doing this for a week and made around $1400 so far. Super easy and stress-free.",
            timestamp: "6 hours ago",
            likes: 19,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 3,
            text: "This article explains everything clearly. I didn’t even know AI and humans worked together like this.",
            timestamp: "4 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [
                {
                    id: 11,
                    userId: 6,
                    text: "Same! I just thought AI did everything alone. This helped me understand my role better.",
                    timestamp: "2 hours ago",
                    likes: 4,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 3,
            userId: 2,
            text: "Got my first payout yesterday! It’s real. Wasn’t sure at first but glad I gave it a try.",
            timestamp: "5 hours ago",
            likes: 21,
            likedByUser: false,
            replies: [],
        },
        {
            id: 4,
            userId: 8,
            text: "Not bad at all. I do this during lunch breaks and still make something daily. Worth checking out.",
            timestamp: "3 hours ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 9,
            text: "Only downside is that sometimes tasks run out during peak hours. But still better than most side gigs.",
            timestamp: "7 hours ago",
            likes: 9,
            likedByUser: false,
            replies: [
                {
                    id: 12,
                    userId: 4,
                    text: "Yeah I noticed that too, I try logging in early morning and it’s better.",
                    timestamp: "5 hours ago",
                    likes: 2,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 7,
            userId: 11,
            text: "If you’re expecting to get rich overnight, this isn’t that. But if you're consistent, it pays decently.",
            timestamp: "8 hours ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 8,
            userId: 12,
            text: "Payments are fast and the work is light. Glad I stumbled on this.",
            timestamp: "4 hours ago",
            likes: 17,
            likedByUser: false,
            replies: [],
        },
        {
            id: 9,
            userId: 13,
            text: "I like that they don’t ask for personal details. Feels safer than other platforms I’ve tried.",
            timestamp: "2 hours ago",
            likes: 13,
            likedByUser: false,
            replies: [],
        },
        {
            id: 10,
            userId: 14,
            text: "Wasn't sure what ‘human verification’ meant at first, but now I get it. It’s just real interaction. Smart system.",
            timestamp: "3 hours ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 11,
            userId: 10,
            text: "Honestly? I was skeptical. But this article breaks it down clearly. Worth reading if you’re unsure.",
            timestamp: "5 hours ago",
            likes: 8,
            likedByUser: false,
            replies: [
                {
                    id: 13,
                    userId: 15,
                    text: "Same here. I almost ignored it but gave it a shot. No regrets so far.",
                    timestamp: "4 hours ago",
                    likes: 3,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 12,
            userId: 16,
            text: "I’ve tried a lot of ‘easy money’ online jobs but this is actually practical and doesn’t waste your time.",
            timestamp: "2 hours ago",
            likes: 20,
            likedByUser: false,
            replies: [],
        },
        {
            id: 13,
            userId: 17,
            text: "Nice way to earn passively while helping improve products. Win-win.",
            timestamp: "1 hour ago",
            likes: 12,
            likedByUser: false,
            replies: [],
        },
        {
            id: 14,
            userId: 18,
            text: "Sometimes it feels repetitive, but it’s not hard, and the money adds up quickly.",
            timestamp: "6 hours ago",
            likes: 7,
            likedByUser: false,
            replies: [],
        },
        {
            id: 15,
            userId: 19,
            text: "Real job with real results. You just need consistency, not skills.",
            timestamp: "30 minutes ago",
            likes: 15,
            likedByUser: false,
            replies: [],
        },
    ],
    2: [
        {
            id: 1,
            userId: 28, // Jason Brooks
            text: "I upgraded to VIP Level 2 yesterday and already seeing a major boost in payouts. The tier system works well.",
            timestamp: "3 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 38, // Nathan Price
            text: "I started at Level 1 but reached Level 3 in less than two weeks. Consistency really pays off here!",
            timestamp: "5 hours ago",
            likes: 19,
            likedByUser: false,
            replies: [
                {
                    id: 21,
                    userId: 26, // Dylan Carter
                    text: "That’s fast! I’m still working through Level 2 — hoping to catch up soon.",
                    timestamp: "2 hours ago",
                    likes: 4,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 3,
            userId: 34, // Caleb Foster
            text: "Clear and motivating. VIP 4 sounds intense, but if the payout is $1000/day plus commissions? Worth the grind.",
            timestamp: "6 hours ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 4,
            userId: 51, // Bella Singh
            text: "I wish there were more stats shown for commissions. Other than that, the system is solid.",
            timestamp: "4 hours ago",
            likes: 6,
            likedByUser: false,
            replies: [
                {
                    id: 22,
                    userId: 44, // Gavin Reed
                    text: "Agreed. A little more transparency would make it perfect.",
                    timestamp: "3 hours ago",
                    likes: 2,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 5,
            userId: 36, // Logan Murphy
            text: "The VIP levels give a clear path for growth. I’m taking it step by step and it’s working.",
            timestamp: "1 hour ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 6,
            userId: 50, // Adrian Scott
            text: "Not many platforms offer this kind of performance-based reward system. It keeps you engaged.",
            timestamp: "40 minutes ago",
            likes: 8,
            likedByUser: false,
            replies: [],
        },
    ],
    3: [
        {
            id: 1,
            userId: 29, // Samantha Lee
            text: "At first I was nervous about getting paid in crypto, but it’s actually faster and smoother than bank transfers.",
            timestamp: "6 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 41, // Madison Harper
            text: "Love that they cover the gas fees. I received my first USDT payment in Trust Wallet without any issues.",
            timestamp: "3 hours ago",
            likes: 17,
            likedByUser: false,
            replies: [],
        },
        {
            id: 3,
            userId: 30, // Tyler Scott
            text: "The crypto part scared me initially, but since we’re not trading or investing anything, it actually feels pretty safe.",
            timestamp: "5 hours ago",
            likes: 11,
            likedByUser: false,
            replies: [
                {
                    id: 31,
                    userId: 36, // Logan Murphy
                    text: "Exactly! You’re just using it like a payment method. No risk involved.",
                    timestamp: "2 hours ago",
                    likes: 5,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 4,
            userId: 43, // Victoria Park
            text: "I’ve used Coinbase for years, so this setup was perfect for me. Got paid within minutes after completing tasks.",
            timestamp: "4 hours ago",
            likes: 13,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 55, // Stella Morgan
            text: "I was worried I’d have to learn crypto trading, but thankfully that’s not part of it at all. It’s just a receiving method.",
            timestamp: "7 hours ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 6,
            userId: 46, // Owen Ellis
            text: "Really appreciate how the platform helps you set up wallets. It was my first time using crypto and I felt fully supported.",
            timestamp: "2 hours ago",
            likes: 9,
            likedByUser: false,
            replies: [],
        },
        {
            id: 7,
            userId: 48, // Tristan Webb
            text: "Honestly, I now prefer this over bank transfers. No middlemen, no delays. It’s instant and global.",
            timestamp: "1 hour ago",
            likes: 12,
            likedByUser: false,
            replies: [],
        },
        {
            id: 8,
            userId: 60, // Amber Patel
            text: "Wasn’t sure about MetaMask, but once I tried it, the process was simple. Payment came in full with no deductions.",
            timestamp: "3 hours ago",
            likes: 7,
            likedByUser: false,
            replies: [],
        },
        {
            id: 9,
            userId: 35, // Jasmine Ali
            text: "Good to see a platform actually explaining crypto properly. This article cleared up a lot of confusion I had.",
            timestamp: "6 hours ago",
            likes: 8,
            likedByUser: false,
            replies: [],
        },
    ],
    4: [
        {
            id: 1,
            userId: 47, // Kayla Barnes
            text: "Honestly, WhatsApp made everything easier. The screen recordings and voice notes helped me understand the dashboard in minutes.",
            timestamp: "2 hours ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 58, // Vanessa Moore
            text: "Wasn’t sure about WhatsApp at first, but I’ve had faster replies and better guidance there than I ever got via email in other jobs.",
            timestamp: "4 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 3,
            userId: 53, // Lily Chen
            text: "It’s way more convenient. I got real-time help while I was stuck on my first task, and the trainer literally circled things in screenshots to guide me.",
            timestamp: "1 hour ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 4,
            userId: 31, // Emily Ross
            text: "I’ve worked remotely before, but this is the first time I’ve had onboarding that actually felt personal. WhatsApp makes that possible.",
            timestamp: "3 hours ago",
            likes: 9,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 52, // Miles Hunt
            text: "People think WhatsApp is unprofessional? It’s actually the smartest way to guide people step by step. I’ve had zero confusion since joining.",
            timestamp: "30 minutes ago",
            likes: 13,
            likedByUser: false,
            replies: [],
        },
    ],
    14: [
        {
            id: 1,
            userId: 39, // Ariana Bell
            text: "Yes! I saw a warning when I opened the link, but switching from WiFi to mobile data solved it instantly.",
            timestamp: "4 hours ago",
            likes: 13,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 56, // Cole Andrews
            text: "Thought the link was broken at first but my trainer explained it’s a security feature. Got in through Chrome with no issue.",
            timestamp: "3 hours ago",
            likes: 9,
            likedByUser: false,
            replies: [
                {
                    id: 21,
                    userId: 25, // Mia Rivera
                    text: "Same here! I thought it was an error but it's just part of their protection system.",
                    timestamp: "2 hours ago",
                    likes: 4,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 3,
            userId: 27, // Hailey Nguyen
            text: "I almost gave up when it didn’t load at first! Glad I messaged my trainer. She gave me a backup link that worked right away.",
            timestamp: "6 hours ago",
            likes: 12,
            likedByUser: false,
            replies: [
                {
                    id: 22,
                    userId: 42, // Isaac Long
                    text: "Trainers are super responsive. I got help within 5 minutes.",
                    timestamp: "5 hours ago",
                    likes: 3,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 4,
            userId: 59, // Leo Fernandez
            text: "Got the security warning too but after reading this, I stayed calm and tried on Chrome. It worked perfectly!",
            timestamp: "2 hours ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 44, // Gavin Reed
            text: "Happened to me on iPhone Safari. Then I opened it on my laptop using Chrome and it was smooth from there.",
            timestamp: "1 hour ago",
            likes: 7,
            likedByUser: false,
            replies: [],
        },
        {
            id: 6,
            userId: 54, // Jordan Blake
            text: "To be honest, I panicked a little at first 😂 but it’s true — switching networks and using Chrome totally fixed it.",
            timestamp: "30 minutes ago",
            likes: 6,
            likedByUser: false,
            replies: [
                {
                    id: 23,
                    userId: 36, // Logan Murphy
                    text: "Haha same! I was like 'what’s going on' but it’s all good once you know the trick.",
                    timestamp: "25 minutes ago",
                    likes: 2,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 7,
            userId: 42, // Isaac Long
            text: "This article reassured me. I thought I had a virus or something, but it’s actually just high security protection. Makes sense now.",
            timestamp: "5 hours ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 8,
            userId: 25, // Mia Rivera
            text: "The $25 welcome bonus gave me the motivation to stick through the login issue 😅 Glad I did—it worked in the second attempt!",
            timestamp: "4 hours ago",
            likes: 15,
            likedByUser: false,
            replies: [],
        },
    ],
    15: [
        {
            id: 1,
            userId: 14, // Liam Walker
            text: "Just got my first Lucky Order during training and my balance went negative. I panicked a bit, but this article explained it clearly. Thanks!",
            timestamp: "3 hours ago",
            likes: 18,
            likedByUser: false,
            replies: [
                {
                    id: 21,
                    userId: 16, // Ethan Turner
                    text: "Same happened with me. Negative balance looked scary at first but it sorted itself out after the trainer checked it.",
                    timestamp: "2 hours ago",
                    likes: 5,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 2,
            userId: 10, // Kevin Brown
            text: "I haven’t received one yet but now I understand how rare and random they are. Makes sense!",
            timestamp: "5 hours ago",
            likes: 9,
            likedByUser: false,
            replies: [],
        },
        {
            id: 3,
            userId: 19, // Sophia Clark
            text: "Honestly, I thought Lucky Orders were a scam until I saw the dashboard history. Glad this post cleared things up.",
            timestamp: "4 hours ago",
            likes: 13,
            likedByUser: false,
            replies: [
                {
                    id: 22,
                    userId: 13, // Ava Martinez
                    text: "It’s good that they tell us to double-check through RECORDS. That adds a level of trust.",
                    timestamp: "3 hours ago",
                    likes: 4,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 4,
            userId: 24, // Ryan Green
            text: "So that’s why my balance dropped last night 😅 I was scared but then my trainer explained it and I ended up making $60 on that single task.",
            timestamp: "1 hour ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 12, // Daniel Lee
            text: "I still don’t fully get how it works. Like, why let people’s balance go negative? Wouldn’t that confuse beginners?",
            timestamp: "6 hours ago",
            likes: 7,
            likedByUser: false,
            replies: [
                {
                    id: 23,
                    userId: 1, // Sarah Johnson
                    text: "It’s part of the training model. The value of Lucky Orders can be huge, so even with negative balance, your commission covers it.",
                    timestamp: "4 hours ago",
                    likes: 6,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 6,
            userId: 23, // Zoe Hill
            text: "I just got one and my earnings shot up 4x! I thought it was a bug until my trainer confirmed it was a real Lucky Order.",
            timestamp: "30 minutes ago",
            likes: 20,
            likedByUser: false,
            replies: [],
        },
        {
            id: 7,
            userId: 3, // Emma Davis
            text: "Tbh I thought Lucky Orders were just hype marketing... but now I’ve seen one hit someone in our group, and it was real!",
            timestamp: "1 hour ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 8,
            userId: 6, // John Smith
            text: "Appreciate that they clarified the scam stuff too. I almost got tricked by a Telegram group claiming to sell Lucky Orders.",
            timestamp: "2 hours ago",
            likes: 12,
            likedByUser: false,
            replies: [
                {
                    id: 24,
                    userId: 5, // Lisa Wang
                    text: "Omg I saw those too! Good thing Nexxen keeps reminding us not to fall for fake versions.",
                    timestamp: "1 hour ago",
                    likes: 4,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 9,
            userId: 20, // Jackson Wright
            text: "Honestly, the negative balance part felt shady until I understood why it happens. Now I think it's just part of the system.",
            timestamp: "4 hours ago",
            likes: 8,
            likedByUser: false,
            replies: [],
        },
        {
            id: 10,
            userId: 18, // Noah Young
            text: "Do we get notified before a Lucky Order is placed? Or is it always just a surprise?",
            timestamp: "5 hours ago",
            likes: 6,
            likedByUser: false,
            replies: [
                {
                    id: 25,
                    userId: 8, // David Kim
                    text: "Always a surprise! That’s why it’s called ‘lucky’. But if your trainer sees it, they usually message you.",
                    timestamp: "4 hours ago",
                    likes: 5,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 11,
            userId: 7, // Maria Garcia
            text: "I got one Lucky Order during my second day of training and thought it was an error. Ended up earning $112 commission. 🥹",
            timestamp: "6 hours ago",
            likes: 15,
            likedByUser: false,
            replies: [],
        },
        {
            id: 12,
            userId: 22, // Benjamin Lopez
            text: "This makes me want to stick around and stay active. Imagine getting 200x commission on a random order 😳",
            timestamp: "2 hours ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
    ],
    16: [
        {
            id: 1,
            userId: 9, // Nina Patel
            text: "I was a bit unsure about the $100 thing, but now that I understand it’s just a system requirement, it makes sense. I didn’t have to add the full amount either, most of it came from the training phase. I’ve already withdrawn today’s earnings. I earned $200.44 and successfully withdrew it.",
            images: ["/p3.jpg", "/p4.jpg", "/p1.jpg", "/p2.jpg"],
            timestamp: "6 hours ago",
            likes: 20,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 33, // Riley Cooper
            text: "I only had to add $12 after training. I started earning the same day, so it didn’t feel like a loss at all.",
            timestamp: "5 hours ago",
            likes: 17,
            likedByUser: false,
            replies: [],
        },
        {
            id: 3,
            userId: 5, // Lisa Wang
            text: "The platform explains everything clearly. They’re not hiding anything, which is rare. The balance thing seemed odd at first, but now I get why it’s needed.",
            timestamp: "5 hours ago",
            likes: 19,
            likedByUser: false,
            replies: [],
        },
        {
            id: 4,
            userId: 30, // Stella Nash
            text: "I earned $91 from the training. Just topped up $9 and got started. Didn’t expect it to be this smooth.",
            timestamp: "4 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 24, // Ryan Green
            text: "It's not a deposit or fee, just a working balance that stays in your own account. That cleared up my doubts.",
            timestamp: "4 hours ago",
            likes: 13,
            likedByUser: false,
            replies: [
                {
                    id: 21,
                    userId: 12, // Daniel Lee
                    text: "Exactly. I was overthinking it but once I saw my dashboard update, it clicked.",
                    timestamp: "3 hours ago",
                    likes: 4,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 6,
            userId: 43, // Gianna Brooks
            text: "I didn’t like the idea of adding money at first, but they were upfront about it. That matters a lot.",
            timestamp: "3 hours ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 7,
            userId: 20, // Jackson Wright
            text: "They should mention the $100 balance requirement earlier in the process. I got confused halfway.",
            timestamp: "3 hours ago",
            likes: 9,
            likedByUser: false,
            replies: [
                {
                    id: 22,
                    userId: 2, // Mike Chen
                    text: "True, I had the same issue. The trainer explained it later but it would help if it was part of the intro.",
                    timestamp: "2 hours ago",
                    likes: 5,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 8,
            userId: 16, // Ethan Turner
            text: "It’s just like keeping minimum balance in a wallet to do transactions. Doesn’t feel like a risk to me.",
            timestamp: "2 hours ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 9,
            userId: 47, // Avery Collins
            text: "I added $15 after training. Started my tasks and earned more than that within hours. No complaints so far.",
            timestamp: "1 hour ago",
            likes: 12,
            likedByUser: false,
            replies: [],
        },
        {
            id: 10,
            userId: 14, // Liam Walker
            text: "The trainer helped me understand how it works. Once I saw that the balance stays with me, I was fine with it.",
            timestamp: "1 hour ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 11,
            userId: 27, // Selena Ford
            text: "Honestly thought this was one of those money-taking schemes, but I’ve withdrawn twice already. You just need to be patient in the start.",
            timestamp: "1 hour ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 12,
            userId: 11, // Olivia Thompson
            text: "Glad I didn’t quit when I saw the balance thing. Once I earned from training and started my sets, it all made sense.",
            timestamp: "58 minutes ago",
            likes: 15,
            likedByUser: false,
            replies: [],
        },
        {
            id: 13,
            userId: 37, // Leo Cross
            text: "I only wish they allowed earning first and then holding the balance, but I get why the system is built this way.",
            timestamp: "56 minutes ago",
            likes: 8,
            likedByUser: false,
            replies: [],
        },
        {
            id: 14,
            userId: 41, // Saanvi Sharma
            text: "Training earnings covered most of the requirement. Only added a few bucks and I was ready to start.",
            timestamp: "55 minutes ago",
            likes: 9,
            likedByUser: false,
            replies: [],
        },
        {
            id: 15,
            userId: 25, // Mia Rivera
            text: "My trainer even showed a screen recording of his live balance going negative and coming back. That gave me confidence.",
            timestamp: "50 minutes ago",
            likes: 12,
            likedByUser: false,
            replies: [],
        },
    ],
    17: [
        {
            id: 1,
            userId: 7, // Maria Garcia
            text: "I was really worried when Cash App showed me the ‘Scam Detected’ warning on my first BTC deposit. But my trainer explained it’s normal, so I just followed their steps and it worked fine.",
            timestamp: "4 hours ago",
            likes: 15,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 19, // Sophia Clark
            text: "These warnings caught me off guard at first. But after contacting support and using the new BTC address they gave me, the deposit went through without problems.",
            timestamp: "3 hours ago",
            likes: 12,
            likedByUser: false,
            replies: [
                {
                    id: 11,
                    userId: 1, // Sarah Johnson
                    text: "Same here! Don’t let those warnings scare you, it’s just Cash App being extra careful.",
                    timestamp: "2 hours ago",
                    likes: 4,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 3,
            userId: 29, // Marcus Allen
            text: "I thought my transaction was blocked for good. Trainer told me to try again with a fresh address, and it worked perfectly. Just stay patient.",
            timestamp: "3 hours ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 4,
            userId: 5, // Lisa Wang
            text: "Honestly, the warning scared me and I almost gave up. Trainer kept reassuring me and it turned out fine. Now I know it’s pretty common.",
            timestamp: "2 hours ago",
            likes: 9,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 44, // Noah Bennett
            text: "Cash App is just very cautious, which actually feels safer in a way. Just follow the process and don’t overthink the warnings.",
            timestamp: "2 hours ago",
            likes: 11,
            likedByUser: false,
            replies: [
                {
                    id: 12,
                    userId: 14, // Liam Walker
                    text: "Exactly, it’s better they alert too much than too little. I got my BTC through without a hitch.",
                    timestamp: "1 hour ago",
                    likes: 5,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 6,
            userId: 22, // Benjamin Lopez
            text: "If you’re new to crypto, these warnings are confusing, but just ask your trainer for help and keep trying. It’s normal.",
            timestamp: "1 hour ago",
            likes: 8,
            likedByUser: false,
            replies: [],
        },
        {
            id: 7,
            userId: 10, // Kevin Brown
            text: "The first warning I saw made me nervous. But after reading Cash App’s official docs and consulting my trainer, I’m totally comfortable now.",
            timestamp: "30 minutes ago",
            likes: 7,
            likedByUser: false,
            replies: [],
        },
    ],
    18: [
        {
            id: 1,
            userId: 13, // Ava Martinez
            text: "I was really nervous about buying Bitcoin at first, but after learning about Cash App’s security and following my trainer’s instructions, I feel confident now.",
            timestamp: "5 hours ago",
            likes: 20,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 23, // Zoe Hill
            text: "This article cleared a lot of my doubts. Knowing that millions use Cash App safely makes me trust the process more.",
            timestamp: "4 hours ago",
            likes: 18,
            likedByUser: false,
            replies: [
                {
                    id: 11,
                    userId: 19, // Sophia Clark
                    text: "Absolutely! Transparency and blockchain verification really help ease my mind too.",
                    timestamp: "3 hours ago",
                    likes: 6,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 3,
            userId: 17, // Grace Hall
            text: "The built-in encryption and compliance with regulations was news to me — that definitely makes Cash App feel trustworthy.",
            timestamp: "4 hours ago",
            likes: 15,
            likedByUser: false,
            replies: [],
        },
        {
            id: 4,
            userId: 31, // Jason White
            text: "I was scared at first because of all the scam news, but the trainer helped me verify transactions step-by-step. Now I’m more confident in buying Bitcoin.",
            timestamp: "3 hours ago",
            likes: 12,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 9, // Nina Patel
            text: "I love that you can verify Bitcoin holdings on blockchain explorers. That kind of transparency is reassuring for beginners like me.",
            timestamp: "2 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [
                {
                    id: 12,
                    userId: 1, // Sarah Johnson
                    text: "Same here! It’s like having a public ledger where you can prove your coins belong to you.",
                    timestamp: "1 hour ago",
                    likes: 5,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 6,
            userId: 37, // Olivia Baker
            text: "The point about trusting trainers and support is important. I’ve always felt supported and it made me feel safer throughout the process.",
            timestamp: "1 hour ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 7,
            userId: 20, // Kevin Brown
            text: "Thanks for this clear explanation. Crypto seemed intimidating but now it feels manageable with the right guidance.",
            timestamp: "45 minutes ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 8,
            userId: 40, // Mia Wilson
            text: "I also checked Cash App’s official Bitcoin buying guide after reading this, and it really confirms that it’s a secure process.",
            timestamp: "30 minutes ago",
            likes: 9,
            likedByUser: false,
            replies: [],
        },
    ],
    20: [
        {
            id: 1,
            userId: 5, // Lisa Wang
            text: "I was confused why my trainer couldn’t help with the small balance at first, but now I understand it’s about security and trust. Makes sense!",
            timestamp: "6 hours ago",
            likes: 21,
            likedByUser: false,
            replies: [],
        },
        {
            id: 2,
            userId: 15, // Chloe Adams
            text: "The human verification part really stood out to me. I appreciate how the system protects us all from fraud.",
            timestamp: "5 hours ago",
            likes: 18,
            likedByUser: false,
            replies: [
                {
                    id: 11,
                    userId: 25, // Mia Rivera
                    text: "Exactly! It’s easy to overlook, but it’s a smart way to keep things secure for everyone.",
                    timestamp: "4 hours ago",
                    likes: 6,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 3,
            userId: 7, // Maria Garcia
            text: "I respect the policy now that I know why trainers can’t lend money for the minimum balance. It keeps things fair.",
            timestamp: "4 hours ago",
            likes: 17,
            likedByUser: false,
            replies: [],
        },
        {
            id: 4,
            userId: 18, // Noah Young
            text: "I initially thought it was a fee, but it’s actually a safety step. Glad they explained this clearly.",
            timestamp: "3 hours ago",
            likes: 16,
            likedByUser: false,
            replies: [],
        },
        {
            id: 5,
            userId: 1, // Sarah Johnson
            text: "Knowing this rule prevents confusion and builds trust. Trainers do their job guiding, but this part has to be personal.",
            timestamp: "3 hours ago",
            likes: 20,
            likedByUser: false,
            replies: [
                {
                    id: 12,
                    userId: 10, // Kevin Brown
                    text: "Right, it’s about responsibility and authenticity. I’m happy to see the system values that.",
                    timestamp: "2 hours ago",
                    likes: 7,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 6,
            userId: 22, // Benjamin Lopez
            text: "The verification process made me feel safer joining this platform. It’s a solid safeguard against scams.",
            timestamp: "2 hours ago",
            likes: 15,
            likedByUser: false,
            replies: [],
        },
        {
            id: 7,
            userId: 3, // Emma Davis
            text: "This explanation really helped me accept the small balance rule instead of being frustrated by it.",
            timestamp: "2 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 8,
            userId: 29, // Luke Edwards
            text: "It’s reassuring to know the policy is about fairness and security, not just rules for the sake of rules.",
            timestamp: "1 hour ago",
            likes: 13,
            likedByUser: false,
            replies: [],
        },
        {
            id: 9,
            userId: 8, // David Kim
            text: "I appreciate the transparency. Sometimes these small steps can feel like hurdles, but now I see their value.",
            timestamp: "30 minutes ago",
            likes: 12,
            likedByUser: false,
            replies: [],
        },
    ],
    21: [
        {
            id: 12,
            userId: 6, // John Smith
            text: "I was hesitant about the initial amount too, but earning $200+ daily made it totally worth it. Best decision I made!",
            timestamp: "10 hours ago",
            likes: 28,
            likedByUser: false,
            replies: [
                {
                    id: 121,
                    userId: 7, // Maria Garcia
                    text: "How long did it take you to start earning that much?",
                    timestamp: "9 hours ago",
                    likes: 3,
                    likedByUser: false,
                },
                {
                    id: 122,
                    userId: 6, // John Smith
                    text: "Right after training! The earnings start immediately once you complete the setup.",
                    timestamp: "8 hours ago",
                    likes: 12,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 13,
            userId: 13, // Ava Martinez
            text: "Honestly, I almost gave up over $15. Glad I didn’t. This platform pays if you stay consistent.",
            timestamp: "9 hours ago",
            likes: 22,
            likedByUser: false,
            replies: [],
        },
        {
            id: 14,
            userId: 19, // Sophia Clark
            text: "At first I thought it was just another scheme, but it actually works. I earned back that amount and more in one day.",
            timestamp: "8 hours ago",
            likes: 19,
            likedByUser: false,
            replies: [],
        },
        {
            id: 15,
            userId: 28, // Harper Bennett
            text: "It’s not about the $20, it’s about the mindset. If you want change, you’ve got to take the first step.",
            timestamp: "7 hours ago",
            likes: 17,
            likedByUser: false,
            replies: [],
        },
        {
            id: 16,
            userId: 9, // Nina Patel
            text: "I was scared to put in money at first, but now I understand it’s just a hold and I got it back right away.",
            timestamp: "6 hours ago",
            likes: 20,
            likedByUser: false,
            replies: [
                {
                    id: 123,
                    userId: 11, // Olivia Thompson
                    text: "Same here! I thought it was a charge but it stayed in my account.",
                    timestamp: "6 hours ago",
                    likes: 5,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 17,
            userId: 31, // Elijah Hayes
            text: "If you really want to change your financial life, stop waiting for a perfect moment. I started with just $14 in my account.",
            timestamp: "5 hours ago",
            likes: 18,
            likedByUser: false,
            replies: [],
        },
        {
            id: 18,
            userId: 25, // Mia Rivera
            text: "This post actually helped change my perspective. It’s not about losing money, it’s about unlocking income.",
            timestamp: "4 hours ago",
            likes: 16,
            likedByUser: false,
            replies: [],
        },
        {
            id: 19,
            userId: 32, // Nathan Brooks
            text: "Trust me, if you're hesitating over $10, you're not seeing the big picture. This job pays back fast.",
            timestamp: "3 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 20,
            userId: 17, // Grace Hall
            text: "Best advice in this article: ‘That small amount isn’t a burden — it’s a doorway.’ That stuck with me.",
            timestamp: "3 hours ago",
            likes: 13,
            likedByUser: false,
            replies: [],
        },
        {
            id: 21,
            userId: 22, // Benjamin Lopez
            text: "Started this unsure, but now I tell everyone — take the step. What’s $15 if it opens the way to real daily income?",
            timestamp: "2 hours ago",
            likes: 12,
            likedByUser: false,
            replies: [],
        },
    ],
    22: [
        {
            id: 301,
            userId: 5, // Lisa Wang
            text: "I thought my progress was lost when my task paused, but the reset process was super smooth. Took me 10 minutes total!",
            timestamp: "9 hours ago",
            likes: 22,
            likedByUser: false,
            replies: [],
        },
        {
            id: 302,
            userId: 9, // Nina Patel
            text: "At first I was nervous about sending crypto, but support was so helpful. They guided me step-by-step, and my sets were unlocked fast.",
            timestamp: "8 hours ago",
            likes: 19,
            likedByUser: false,
            replies: [
                {
                    id: 3021,
                    userId: 6, // John Smith
                    text: "Same here! I used USDT from Binance and they confirmed it within 15 minutes.",
                    timestamp: "7 hours ago",
                    likes: 5,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 303,
            userId: 14, // Amelia Chen
            text: "I used Cash App to buy BTC for the reset and it worked perfectly. Just make sure to send the receipt right away.",
            timestamp: "7 hours ago",
            likes: 15,
            likedByUser: false,
            replies: [],
        },
        {
            id: 304,
            userId: 28, // Harper Bennett
            text: "The reset amount was low, and it unlocked my pending sets right after confirmation. Process was smoother than I expected.",
            timestamp: "6 hours ago",
            likes: 17,
            likedByUser: false,
            replies: [],
        },
        {
            id: 305,
            userId: 18, // Noah Young
            text: "Honestly I thought it’d be complicated, but it was super easy. Got the ETH address, sent it, and they reset it for me same day.",
            timestamp: "5 hours ago",
            likes: 13,
            likedByUser: false,
            replies: [],
        },
        {
            id: 306,
            userId: 7, // Maria Garcia
            text: "Glad I didn’t panic when my sets paused. Just followed the steps, contacted support, and got back on track quickly.",
            timestamp: "5 hours ago",
            likes: 14,
            likedByUser: false,
            replies: [],
        },
        {
            id: 307,
            userId: 11, // Olivia Thompson
            text: "Pro tip: Use Trust Wallet if you’re new. It’s easy to send from there and worked great for me when I had to reset.",
            timestamp: "4 hours ago",
            likes: 11,
            likedByUser: false,
            replies: [],
        },
        {
            id: 308,
            userId: 22, // Benjamin Lopez
            text: "Support even helped me pick the right coin based on my app. I used USDT instead of BTC and it worked just fine.",
            timestamp: "3 hours ago",
            likes: 12,
            likedByUser: false,
            replies: [],
        },
        {
            id: 309,
            userId: 13, // Ava Martinez
            text: "I had never used crypto before, but this article + the support team made it super beginner-friendly.",
            timestamp: "2 hours ago",
            likes: 10,
            likedByUser: false,
            replies: [],
        },
        {
            id: 310,
            userId: 15, // Chloe Adams
            text: "I got stuck during reset because I sent to the wrong network. Support quickly helped and sent a fresh address. Always double-check that!",
            timestamp: "2 hours ago",
            likes: 8,
            likedByUser: false,
            replies: [
                {
                    id: 3101,
                    userId: 25, // Mia Rivera
                    text: "Omg thanks for the heads up! I almost sent to the wrong one too.",
                    timestamp: "1 hour ago",
                    likes: 4,
                    likedByUser: false,
                },
            ],
        },
        {
            id: 311,
            userId: 31, // Elijah Hayes
            text: "Resetting was actually a relief. Once I saw my earnings continue, I knew the system was real.",
            timestamp: "1 hour ago",
            likes: 13,
            likedByUser: false,
            replies: [],
        },
    ],
}

const Index = () => {
    const [openFAQ, setOpenFAQ] = useState(null)
    const [copiedIndex, setCopiedIndex] = useState(null)
    const [comments, setComments] = useState(initialComments)
    const [newComment, setNewComment] = useState({})
    const [replyingTo, setReplyingTo] = useState(null)
    const [replyText, setReplyText] = useState("")
    const [showNameInput, setShowNameInput] = useState({})
    const [userName, setUserName] = useState({})
    const faqRefs = useRef([])
    const scrollTargetIndex = useRef(null)

    useLayoutEffect(() => {
        const hash = window.location.href.split("#")[1] || ""
        if (hash) {
            const index = faqData.findIndex((faq) => faq.refId === hash)
            if (index !== -1) {
                scrollTargetIndex.current = index
                setOpenFAQ(index)
            }
        }
    }, [])

    useLayoutEffect(() => {
        if (scrollTargetIndex.current !== null) {
            const el = faqRefs.current[scrollTargetIndex.current]
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            scrollTargetIndex.current = null
        }
    }, [openFAQ])

    const toggleFAQ = (index) => {
        setOpenFAQ((prevIndex) => (prevIndex === index ? null : index))

        // Scroll to the top of the selected FAQ smoothly
        const el = faqRefs.current[index]
        if (el) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
            }, 100) // slight delay ensures expanded content does not shift scroll unexpectedly
        }
    }

    const handleCopyLink = (refId, index) => {
        const link = `${window.location.origin}${window.location.pathname}#${refId}`
        navigator.clipboard.writeText(link).then(() => {
            setCopiedIndex(index)
            setTimeout(() => setCopiedIndex(null), 2000)
        })
    }

    const handleShowNameInput = (faqId) => {
        setShowNameInput((prev) => ({ ...prev, [faqId]: true }))
    }

    const handleAddComment = (faqId) => {
        const commentText = newComment[faqId]
        const userNameText = userName[faqId]

        if (!commentText || !commentText.trim() || !userNameText || !userNameText.trim()) return

        // Generate avatar from name
        const nameWords = userNameText.trim().split(" ")
        const avatar =
            nameWords.length >= 2
                ? `${nameWords[0][0]}${nameWords[1][0]}`.toUpperCase()
                : nameWords[0].substring(0, 2).toUpperCase()

        const newCommentObj = {
            id: Date.now(),
            userId: Date.now(), // Use timestamp as unique user ID
            userName: userNameText.trim(),
            avatar: avatar,
            text: commentText.trim(),
            timestamp: "Just now",
            likes: 0,
            likedByUser: false,
            replies: [],
        }

        setComments((prev) => ({
            ...prev,
            [faqId]: [newCommentObj, ...(prev[faqId] || [])], // Add new comment at the beginning
        }))

        setNewComment((prev) => ({ ...prev, [faqId]: "" }))
        setUserName((prev) => ({ ...prev, [faqId]: "" }))
        setShowNameInput((prev) => ({ ...prev, [faqId]: false }))
    }

    const handleAddReply = (faqId, commentId, pushReply) => {
        if (!pushReply.trim()) return

        const newReply = {
            id: Date.now(),
            userId: Date.now(),
            userName: "You", // For replies, we can use "You" or ask for name again
            avatar: "YU",
            text: pushReply.trim(),
            timestamp: "Just now",
            likes: 0,
            likedByUser: false,
        }

        setComments((prev) => ({
            ...prev,
            [faqId]: prev[faqId].map((comment) =>
                comment.id === commentId ? { ...comment, replies: [...comment.replies, newReply] } : comment,
            ),
        }))

        setReplyText("")
        setReplyingTo(null)
    }

    const handleLikeComment = (faqId, commentId, isReply = false, parentCommentId = null) => {
        setComments((prev) => ({
            ...prev,
            [faqId]: prev[faqId].map((comment) => {
                if (isReply && comment.id === parentCommentId) {
                    return {
                        ...comment,
                        replies: comment.replies.map((reply) =>
                            reply.id === commentId
                                ? {
                                    ...reply,
                                    likes: reply.likedByUser ? reply.likes - 1 : reply.likes + 1,
                                    likedByUser: !reply.likedByUser,
                                }
                                : reply,
                        ),
                    }
                } else if (!isReply && comment.id === commentId) {
                    return {
                        ...comment,
                        likes: comment.likedByUser ? comment.likes - 1 : comment.likes + 1,
                        likedByUser: !comment.likedByUser,
                    }
                }
                return comment
            }),
        }))
    }

    const getUserById = (userId) => {
        return mockUsers.find((user) => user.id === userId) || mockUsers[0]
    }

    const CommentComponent = ({ comment, faqId, isReply = false, parentCommentId = null }) => {
        // Check if this is a new user comment (has userName property) or existing mock user
        const isNewUser = comment.userName
        const user = isNewUser ? null : getUserById(comment.userId)
        const displayName = isNewUser ? comment.userName : user?.name
        const displayAvatar = isNewUser ? comment.avatar : user?.avatar
        const isVerified = isNewUser ? false : user?.verified
        const [testReply, setTestReply] = useState("")

        return (
            <div className={`${isReply ? "ml-8 mt-3" : "mb-4"} bg-gray-800 rounded-lg p-4`}>
                <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                            {displayAvatar}
                        </div>
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                            <p className="text-sm font-semibold text-gray-100">{displayName}</p>
                            {isVerified && (
                                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            )}
                            <span className="text-xs text-gray-400">{comment.timestamp}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-300">{comment.text}</p>
                        {comment.images && comment.images.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-3">
                                {comment.images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image || "/placeholder.svg"}
                                        alt={`Comment image ${index + 1}`}
                                        className="max-h-110 w-auto rounded-md object-contain flex-shrink-0"
                                    />
                                ))}
                            </div>
                        )}

                        <div className="mt-2 flex items-center space-x-4">
                            <button
                                onClick={() => handleLikeComment(faqId, comment.id, isReply, parentCommentId)}
                                className={`flex items-center space-x-1 text-xs ${comment.likedByUser ? "text-red-500" : "text-gray-400"} hover:text-red-500 transition-colors`}
                            >
                                <ThumbsUp size={14} className={comment.likedByUser ? "fill-current" : ""} />
                                <span>{comment.likes}</span>
                            </button>
                            {!isReply && (
                                <button
                                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                    className="flex items-center space-x-1 text-xs text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <MessageCircle size={14} />
                                    <span>Reply</span>
                                </button>
                            )}
                        </div>

                        {replyingTo === comment.id && (
                            <div className="mt-3 flex space-x-2">
                                <input
                                    type="text"
                                    value={testReply}
                                    onChange={(e) => setTestReply(e.target.value)}
                                    placeholder="Write a reply..."
                                    className="flex-1 px-3 py-2 border border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-gray-800 text-gray-100 placeholder-gray-500"
                                />
                                <button
                                    onClick={() => handleAddReply(faqId, comment.id, testReply)}
                                    className="px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-300 transition-colors"
                                >
                                    <Send size={14} />
                                </button>
                            </div>
                        )}

                        {comment.replies && comment.replies.length > 0 && (
                            <div className="mt-3">
                                {comment.replies.map((reply) => (
                                    <CommentComponent
                                        key={reply.id}
                                        comment={reply}
                                        faqId={faqId}
                                        isReply={true}
                                        parentCommentId={comment.id}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {faqData.map((faq, index) => (
                <div
                    key={faq.id}
                    id={faq.refId}
                    ref={(el) => (faqRefs.current[index] = el)}
                    className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-600"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-8 py-6 text-left flex justify-between items-start hover:bg-gray-800 transition-colors duration-200"
                    >
                        <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                                <span className="bg-emerald-900/50 text-emerald-400 text-xs font-medium px-3 py-1 rounded-full border border-emerald-300">
                                    {faq.category}
                                </span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleCopyLink(faq.refId, index)
                                    }}
                                    className="flex items-center text-emerald-400 hover:text-emerald-300 text-xs space-x-1"
                                >
                                    <Share2 size={16} />
                                    <span className="sr-only">Copy Link</span>
                                </button>
                                {copiedIndex === index && <span className="text-xs text-green-400 ml-1">Link Copied!</span>}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-100 pr-4">{faq.question}</h3>
                        </div>
                        <ChevronDown
                            className={`text-emerald-400 transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? "rotate-180" : ""}`}
                            size={24}
                        />
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-500 ${openFAQ === index ? "max-h-none opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <div className="px-8 pb-6">
                            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl p-6 border-l-4 border-emerald-500 mb-6">
                                <div className="text-gray-300 leading-relaxed text-base">{faq.answer}</div>
                            </div>

                            {/* Comments Section */}
                            <div className="border-t border-gray-700 pt-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-lg font-semibold text-gray-100">
                                        Community Reviews ({(comments[faq.id] || []).length})
                                    </h4>
                                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                                        <Heart size={16} />
                                        <span>Share your experience</span>
                                    </div>
                                </div>

                                {/* Add Comment */}
                                <div className="mb-6">
                                    {!showNameInput[faq.id] ? (
                                        <div className="flex items-center justify-center">
                                            <button
                                                onClick={() => handleShowNameInput(faq.id)}
                                                className="flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-300 transition-colors"
                                            >
                                                <User size={18} />
                                                <span>Write a Review</span>
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {/* Name Input */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                                                <input
                                                    type="text"
                                                    value={userName[faq.id] || ""}
                                                    onChange={(e) => setUserName((prev) => ({ ...prev, [faq.id]: e.target.value }))}
                                                    placeholder="Enter your full name (e.g., Annie Corbin)"
                                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-100 placeholder-gray-500"
                                                />
                                            </div>

                                            {/* Comment Input */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">Your Review</label>
                                                {/* Updated textarea background and text colors for dark theme */}
                                                <textarea
                                                    value={newComment[faq.id] || ""}
                                                    onChange={(e) => setNewComment((prev) => ({ ...prev, [faq.id]: e.target.value }))}
                                                    placeholder="Share your thoughts about this FAQ..."
                                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-100 placeholder-gray-500"
                                                    rows="3"
                                                />
                                            </div>

                                            <div className="flex justify-end space-x-3">
                                                <button
                                                    onClick={() => {
                                                        setShowNameInput((prev) => ({ ...prev, [faq.id]: false }))
                                                        setNewComment((prev) => ({ ...prev, [faq.id]: "" }))
                                                        setUserName((prev) => ({ ...prev, [faq.id]: "" }))
                                                    }}
                                                    className="px-4 py-2 text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors bg-gray-900"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={() => handleAddComment(faq.id)}
                                                    disabled={!newComment[faq.id]?.trim() || !userName[faq.id]?.trim()}
                                                    className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-300 disabled:bg-gray-700 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                                                >
                                                    <Send size={16} />
                                                    <span>Post Review</span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Display Comments */}
                                <div className="space-y-4">
                                    {(comments[faq.id] || []).map((comment) => (
                                        <CommentComponent key={comment.id} comment={comment} faqId={faq.id} />
                                    ))}

                                    {(!comments[faq.id] || comments[faq.id].length === 0) && (
                                        <div className="text-center py-8 text-gray-400">
                                            <MessageCircle size={48} className="mx-auto mb-3 text-gray-400" />
                                            <p>No reviews yet. Be the first to share your experience!</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Index
