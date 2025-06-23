import React, { useState, useRef, useLayoutEffect } from 'react'
import { ChevronDown, Share2 } from "lucide-react"

const faqData = [
    {
        id: 1,
        refId: "products-optimization-job",
        question: "What is a Products Optimization job and who can do it?",
        answer: (
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    A <strong>Products Optimization job</strong> involves improving the visibility and ranking of products listed on platforms like Amazon and eBay. The goal is to enhance product performance using real data, which leads to better traffic, higher sales, and increased profitability for merchants.
                </p>

                <p>
                    This job is powered by AI, but requires crucial <span className="font-semibold text-emerald-700">human involvement</span> for authenticity and effectiveness.
                </p>

                <p>
                    <span className="font-semibold">Who can do it?</span> You don’t need to be an SEO expert. Anyone with a mobile phone and internet connection can participate. All backend optimization techniques are managed by AI—your job is to contribute your presence and human verification to make the process real and trustworthy.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>No technical skills or purchases required</li>
                    <li>Instant payments and daily commissions</li>
                    <li>Flexible work hours (part-time & remote)</li>
                    <li>No personal information needed</li>
                </ul>

                <p>
                    <span className="font-semibold text-emerald-700">Why is human involvement important?</span> AI can automate many tasks, but platforms like Amazon and eBay require genuine human signals to ensure the process is not manipulated by bots. Human interaction provides:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Real engagement and behavior patterns</li>
                    <li>Trust signals for product authenticity</li>
                    <li>Verification that AI cannot fake</li>
                </ul>

                <p>
                    <em className="text-sm text-gray-600">
                        For example, when a product is optimized through AI alone, it may lack the human touch needed to pass platform authenticity checks. Your participation ensures those checks are passed, making the product rank higher and perform better.
                    </em>
                </p>

                <p>
                    <strong className="text-emerald-700">Common Concern:</strong> “If I’m not buying or using a product, how can I give feedback or help promote it without lying?”
                </p>

                <p>
                    Great question! You are <strong>not</strong> giving reviews or making false claims. You are simply assisting our AI system in understanding how real users interact with certain product listings—such as clicking, searching, and spending time on them. This helps train the algorithm to improve product positioning on platforms. It's <span className="font-semibold">completely ethical</span> and similar to how digital marketers test user behavior to improve online visibility.
                </p>

                <p>
                    Our platform, <strong>Nexxen</strong>, partners with trusted merchants to manage and optimize their products. As a Products Optimizer, you’ll help them improve sales and visibility, and earn a daily salary plus commission.
                </p>
            </div>
        ),
        category: "Products Optimization Job Role",
    },

    {
        id: 2,
        refId: "salary-and-commission",
        question: "How does salary and commission work in the Products Optimization job?",
        answer: (
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    Your earnings in the <strong>Products Optimization job</strong> are based on a combination of a <span className="font-semibold text-emerald-700">fixed base salary</span> and a <span className="font-semibold text-emerald-700">performance-based commission</span>. Both of these depend on your current <strong>VIP level</strong> within the platform.
                </p>

                <p>
                    The higher your VIP level, the more product sets you optimize per day, and the higher your salary becomes.
                </p>

                <div className="bg-gray-50 border border-emerald-200 rounded-md p-4">
                    <h4 className="text-emerald-700 font-semibold mb-2">📊 VIP Levels & Daily Earnings</h4>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>
                            <strong>VIP Level 1:</strong> 3 sets/day &mdash; <span className="text-emerald-600 font-semibold">$50 base salary</span>
                        </li>
                        <li>
                            <strong>VIP Level 2:</strong> 4 sets/day &mdash; <span className="text-emerald-600 font-semibold">$200 base salary</span>
                        </li>
                        <li>
                            <strong>VIP Level 3:</strong> 5 sets/day &mdash; <span className="text-emerald-600 font-semibold">$500 base salary</span>
                        </li>
                        <li>
                            <strong>VIP Level 4:</strong> 6 sets/day &mdash; <span className="text-emerald-600 font-semibold">$1000 base salary</span>
                        </li>
                    </ul>
                </div>

                <p>
                    💡 <span className="font-semibold">Commissions</span> are also awarded in addition to the base salary, based on the performance of the products you've helped optimize. The more sets you complete and the better the results, the more you earn.
                </p>

                <p className="italic text-sm text-gray-600">
                    For example, a user at VIP Level 2 optimizing 4 sets per day can earn a $200 base salary plus additional commissions depending on traffic and product engagement.
                </p>

                <p>
                    This system is designed to reward consistency, performance, and growth. As you move up the VIP levels, your daily workload increases slightly, but so does your earning potential.
                </p>
            </div>
        ),
        category: "Salary & Commission",
    },

    {
        id: 3,
        refId: "getting-paid",
        question: "How will I get paid, and why is payment made through cryptocurrency?",
        answer: (
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    All payments for the <strong>Products Optimization job</strong> are made through <span className="font-semibold text-emerald-700">digital currency</span> such as <strong>USDT, ETH, or BTC</strong>. You can receive your earnings directly into any trusted digital wallet, including:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Cash App</li>
                    <li>MetaMask</li>
                    <li>Trust Wallet</li>
                    <li>Coinbase</li>
                    <li>Crypto.com</li>
                </ul>

                <p>
                    💡 <strong>Note:</strong> Payments are <span className="text-emerald-600 font-semibold">not sent in local currency</span> (such as INR, AED, or USD), and are not processed via local banks. This is because the company operates <span className="font-semibold">globally</span> and uses a unified, secure system to manage cross-border payments.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-300 p-4 rounded-md text-sm text-gray-700">
                    🌍 <strong>For Example:</strong> If you're working from the UK, the company cannot transfer pounds directly to your local bank. Similarly, it can't send AED to Dubai or INR to India due to international financial limitations. That's why digital currency is the most flexible and borderless solution.
                </div>

                <p>
                    🔐 <strong>Is Crypto Safe?</strong> Yes! While it's true that many scams have been associated with crypto, this platform uses <span className="font-semibold text-green-700">verified wallets and secure blockchain networks</span>. You are not investing in crypto—you are only using it as a payment method. That makes it 100% safe.
                </p>

                <p>
                    🚫 <span className="text-red-500 font-semibold">You are not being asked to trade crypto.</span> You're simply receiving your earned salary in a widely accepted, decentralized format. The company even pays the transaction/gas fees—<span className="italic">you get the full amount without deductions</span>.
                </p>

                <p>
                    💼 This is part of a fast-growing global shift toward digital finance. Just like emails replaced letters, <strong>digital currency is replacing traditional payments</strong>. It's faster, borderless, and tax-efficient. Major companies and governments are also exploring or implementing crypto-based solutions.
                </p>

                <p className="italic text-sm text-gray-600">
                    Think of it like receiving a digital paycheck—easy to store, easy to withdraw, and globally accessible.
                </p>

                <p>
                    If you're new to this, don’t worry—we’ll guide you step by step on how to set up a wallet and receive your payments securely.
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
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    That's a very valid question—and we understand your concern. While email and portals are common for corporate jobs, for roles like <strong>Products Optimization</strong> that require real-time coordination and step-by-step training, <span className="font-semibold text-emerald-700">WhatsApp is actually one of the most effective communication tools</span>.
                </p>

                <p>
                    📱 With WhatsApp, we’re able to:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>Guide you with <strong>visual step-by-step instructions</strong> (using arrows and screenshots)</li>
                    <li>Respond to your queries in real-time, without long delays</li>
                    <li>Send voice notes or screen recordings for better clarity</li>
                    <li>Provide direct updates on your earnings, training, and task notifications</li>
                    <li>Keep the conversation secure and private with end-to-end encryption</li>
                </ul>

                <p>
                    📚 In our upcoming <strong>training sessions</strong>, we use WhatsApp to share interactive content, explain dashboard usage, and mark screen elements with arrows and highlights—something that email or static platforms cannot do as effectively.
                </p>

                <div className="bg-emerald-50 border-l-4 border-emerald-300 p-4 rounded-md text-sm text-gray-700">
                    💼 <strong>Many reputed companies</strong> and remote job providers use WhatsApp to hire and onboard new employees. Examples include:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Amazon Delivery Partners</strong> use WhatsApp for onboarding new riders</li>
                        <li><strong>Upwork clients</strong> often coordinate and interview freelancers via WhatsApp</li>
                        <li><strong>Local and international BPOs</strong> use WhatsApp for hiring and scheduling</li>
                    </ul>
                </div>

                <p>
                    ✨ In short, WhatsApp is not only easy and fast—but also secure, visual, and extremely convenient. It allows us to offer you a <span className="font-semibold text-emerald-700">personalized experience</span>, where you're never left confused or stuck.
                </p>

                <p className="italic text-sm text-gray-600">
                    So don’t worry—this isn’t unprofessional. It’s a smarter, modern way of keeping you fully supported at every step.
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
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    It’s completely normal to encounter some warnings or errors when opening the platform link for the first time. <span className="font-semibold text-emerald-700">The link is highly secure and private</span>, because you will be creating your working account here where you’ll generate your earnings. So, sometimes it might not open smoothly on a new device or network, and that’s why you see these security warnings.
                </p>

                <p>
                    Don’t worry—this is a common step and part of keeping your data safe. We want you to feel confident and supported, not stuck or confused.
                </p>

                <p>Here are some easy solutions you can try to get the link working:</p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>If you’re connected to WiFi, try switching to mobile data and open the link again.</li>
                    <li>If it still doesn’t work, disconnect from WiFi and try again.</li>
                    <li>If the problem persists, contact your trainer right away. <span className="font-semibold text-emerald-700">Your trainer can provide you with a different secure link</span> to access the platform.</li>
                    <li>Try opening the link in the Chrome browser instead of Safari or any other browser, as Safari sometimes causes these issues.</li>
                    <li>If you’re on mobile, try using a computer with Chrome browser for a smoother experience.</li>
                </ul>

                <p>
                    <strong>Remember:</strong> Don’t give up after one try! These hiccups happen, but with a little patience and the right help from your trainer, you’ll get through easily.
                </p>

                <p>
                    💡 <span className="font-semibold text-emerald-700">Why it’s worth the effort:</span>
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>🎉 You’ll receive a $25 welcome bonus as soon as you create your account.</li>
                    <li>📈 During training, a special training account will be created under yours. You’ll earn 15% of the profits generated from that account, credited directly to your personal account through your invitation code.</li>
                    <li>✅ You officially become a registered member, unlocking many more benefits as you progress.</li>
                </ul>

                <p>
                    The training is designed to make everything simple and clear for you, and by completing the account setup, you open doors to all these advantages.
                </p>

                <p className="italic text-sm text-gray-600">
                    So relax, take your time, and cooperate with your trainer. We’re here to help you every step of the way, because your success is our success!
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
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    <strong>What are Lucky Orders?</strong><br />
                    Lucky Orders (or Combo Orders) are rare and special orders that are randomly assigned by the system to users who get a streak of beginner’s luck. Not everyone receives them, and most people may only get 1 or 2 over years of working.
                </p>

                <p>
                    <strong>Why does my balance go negative when I get one?</strong><br />
                    When you receive a Lucky Order, your balance might show as negative. This doesn’t mean you’ve lost money — it just means the order’s value is higher than your current balance. It’s a temporary situation and is more common in training accounts.
                </p>

                <p>
                    <strong>How much commission can I earn from Lucky Orders?</strong><br />
                    Commissions from Lucky Orders can be extremely high — sometimes 5x, 10x, or even up to 200x more than regular orders. That’s why people get excited about them; they offer a chance to earn significantly more in a single order.
                </p>

                <p>
                    <strong>Are Lucky Orders a scam? Why are product optimization jobs being questioned?</strong><br />
                    Great question — and an important one. Every legitimate company faces copycat scams trying to exploit their name and workflow. Recently, some scammers have tried mimicking our system, especially by falsely offering “Lucky Orders” to gain people’s trust.
                </p>

                <p>
                    Here’s the difference: <br />
                    In Nexxen's real system, Lucky Orders are rare and completely random — we can’t control or assign them at will. Scammers, on the other hand, create fake systems where they hand out Lucky Orders anytime, which is a red flag.
                </p>

                <p>
                    Our legal team is actively tracking and taking action against these scams. If you’re unsure whether an order is real, just click <strong>RECORDS</strong> on the bottom right of your dashboard and send a screenshot to your trainer — They’ll help you verify it.
                </p>

                <p className="italic text-sm text-gray-600">
                    <strong>Reminder:</strong> Don’t get discouraged or confused by misinformation. Stay focused, cooperate with your trainer, and always confirm before assuming anything. You could be just one real Lucky Order away from a big commission!
                </p>

                <p>
                    Stay alert, stay smart — and make the most of your opportunity. 💪
                </p>
            </div>
        ),
        category: "Lucky Orders & Earnings",
    },

    {
        id: 16,
        refId: "initial-funds",
        question: "Do I need to add any funds to my wallet before starting this job?",
        answer: (
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    One of the most common questions new users ask is:
                    <span className="font-semibold text-emerald-700">“Why am I being asked to add money when I joined to earn, not spend?”</span>
                    — and that’s a very valid concern. So let us explain clearly and honestly.
                </p>

                <p>
                    The job involves completing <strong>3 daily sets</strong> after your training is over. These are simple tasks you’ll complete from your personal account, and your daily earnings for these sets (at <span className="text-emerald-700 font-semibold">VIP Level 1</span>) usually range between <strong>$180 to $200</strong>.
                </p>

                <p>
                    But to complete those daily sets and withdraw your earnings, the system requires your account to maintain a <strong>minimum balance of $100</strong>.
                    This is not a fee or a charge — it's just a working balance required by the platform to validate the completion of your sets.
                </p>

                <p>
                    Now, here’s the good part:
                    <span className="font-semibold text-emerald-700">New users are not expected to deposit this $100 upfront.</span>
                    Instead, you go through a short training phase first. In this phase, a training account is created using your invitation code, and the profits from that account automatically credit <strong>15% directly into your own account.</strong>
                </p>

                <p>
                    Most users easily earn more than $100 from this training — so they don’t have to add anything from their own pocket. Even if someone falls slightly short, it’s usually just a few bucks (around $15 to $19).
                </p>

                <p>
                    <strong>And here’s the key point:</strong> The small amount you might add is:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>❌ Not an investment</li>
                    <li>❌ Not a payment or a fee</li>
                    <li>❌ Not something you’re giving to anyone</li>
                    <li>✅ Just a temporary hold in your own account to meet the system’s balance criteria</li>
                </ul>

                <p>
                    As soon as you complete your sets,
                    <span className="font-semibold text-emerald-700">you withdraw not only your earnings but also these few bucks</span> — they’re never taken from you. You’re just holding them briefly, like moving money from one pocket to the other.
                </p>

                <p>
                    💡 <span className="font-semibold text-emerald-700">So why is it worth it?</span>
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>🚀 You start earning $180–$200 per day immediately after training.</li>
                    <li>📈 You already earn during training without needing to add money.</li>
                    <li>🔐 You’re always in control — nothing is ever taken from your account without your action.</li>
                    <li>✅ It’s not a fee, it’s a tool to unlock your full earning potential.</li>
                </ul>

                <p>
                    So don’t let a small temporary hold stop you from unlocking a real daily income.
                    <strong className="text-emerald-700">It’s not a risk — it’s a step forward.</strong>
                </p>

                <p className="italic text-sm text-gray-600">
                    Still confused? Don’t worry — your trainer should be there with you to guide you through every step, and you’ll never be alone in the process. Your success is our goal.
                </p>
            </div>
        ),
        category: "Do I need to add anything out of my own pocket?",
    },

    {
        id: 17,
        refId: "cashapp-scam-warning",
        question: "Why is Cash App showing warnings like “Scam Detected” when I try to send the first transaction?",
        answer: (
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    Great question — and you’re definitely not the only one who’s seen this.
                    A lot of new users get worried when Cash App shows messages like
                    <span className="font-semibold text-red-600">“Scam Detected”</span> or
                    <span className="font-semibold text-red-600">“This looks suspicious”</span> on their first or second BTC transaction.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">But here’s the truth:</span>
                    These warnings are <strong>completely normal</strong> — especially when you’re sending Bitcoin for the first time, or even using an address that’s not in your frequent list.
                </p>

                <p>
                    Cash App is very protective of your funds — and that’s a good thing.
                    Their system often flags even perfectly safe transactions just to make sure you double-check.
                    In fact, even if you’re sending to your own friend or family, these warnings can still appear.
                </p>

                <p>
                    So what should you do if you see this warning and the transaction won’t go through?
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>✅ Don’t panic — this is routine.</li>
                    <li>✅ Contact <strong>Nexxen Customer Support</strong> and tell them you need a <span className="font-semibold">new and fresh BTC deposit address</span>.</li>
                    <li>✅ Once you receive the new address, try your transaction again using that one.</li>
                    <li>✅ Even if you see the same warnings, go ahead — your transaction will process this time.</li>
                </ul>

                <p>
                    <span className="font-semibold text-emerald-700">Should you ignore the warning?</span>
                    Yes — in this context, you can safely ignore it. You’re not sending money to a stranger; you’re completing a step your trainer has guided you through, using the official Nexxen deposit process.
                </p>

                <p>
                    The Cash App warning is just automated — it doesn’t mean your transaction is unsafe. If anything ever goes wrong, your trainer and our team are here to assist.
                </p>

                <p className="text-sm italic text-gray-600">
                    💡 If you’d still like additional reassurance, you can look up
                    <a href="https://cash.app/help/us/en-us/6480-bitcoin-withdrawal-limitations" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Cash App’s official documentation</a>
                    about how they monitor BTC transactions — they clearly mention that they may block or warn on certain transfers just as a precaution.
                </p>

                <p>
                    🧠 Bottom line? <span className="font-semibold text-emerald-700">Trust your trainer, follow the official instructions, and stay calm.</span>
                    These warnings are just digital speed bumps — they’re there to protect you, not to stop you.
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
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    It's completely normal to feel a bit scared or suspicious when buying Bitcoin on Cash App — especially because there’s been a lot of news about Bitcoin scams lately.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">But here’s the important truth:</span> Buying Bitcoin on Cash App is <strong>safe and secure</strong>. Cash App is a trusted digital wallet backed by Square, a publicly traded company used by millions worldwide.
                </p>

                <p>
                    Bitcoin, like any financial asset, can sometimes feel confusing or risky because of its volatility and the complex technology behind it. But Cash App has built-in protections and strict security protocols to keep your funds safe.
                </p>

                <p>
                    <span className="font-semibold">Here are some strong reasons to trust the process:</span>
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>✅ Cash App uses industry-standard encryption to protect your transactions and data.</li>
                    <li>✅ They comply with strict financial regulations and anti-fraud systems to detect suspicious activity.</li>
                    <li>✅ Your Bitcoin purchase is recorded on the blockchain — a public, transparent ledger that anyone can verify.</li>
                    <li>✅ Millions of users worldwide have safely bought and sold Bitcoin through Cash App with no issues.</li>
                </ul>

                <p>
                    If you ever feel unsure, take a moment to double-check transaction details and confirm addresses exactly. And remember, your trainer and Nexxen support are here to guide you step-by-step.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">Pro tip:</span> You can also verify your Bitcoin holdings anytime using public blockchain explorers. This transparency is one of Bitcoin’s biggest strengths — you can prove your coins exist and belong to you.
                </p>

                <p>
                    So, don’t let fear hold you back. Buying Bitcoin on Cash App is a safe, official process — just follow the instructions carefully, stay informed, and reach out for help whenever you need it.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">We also understand that trusting a digital wallet is one thing, but trusting your guide and support team is equally important.</span> That’s why our Nexxen trainers and customer support are dedicated to helping you at every step, making sure your experience is smooth, secure, and scam-free. You’re never alone — we stand by your side to protect your investment and answer any questions.
                </p>

                <p className="text-sm italic text-gray-600">
                    💡 For more reassurance, check out
                    <a
                        href="https://cash.app/help/us/en-us/6480-bitcoin-withdrawal-limitations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        Cash App’s official Bitcoin buying guide
                    </a>
                    and their security features.
                </p>

                <p>
                    🧠 <span className="font-semibold text-emerald-700">Bottom line?</span> Your doubts are normal, but the system is designed to protect you. Trust the digital wallet, trust your trainer, and take one step at a time — you’ve got this!
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
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    It’s totally normal to wonder why your trainer can’t help you with the small amount needed to meet the minimum balance — especially when it’s just a few bucks. But there’s a very important reason behind this rule.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">To be clear:</span> Trainers are <strong>strictly not allowed</strong> to assist with funds related to meeting the minimum balance requirement, even if it’s just a few dollars.
                </p>

                <p>
                    That initial amount you add — often $10 to $20 — is more than just money. It’s a form of <strong>human verification</strong>. It proves that you’re a real person, that you’re genuinely ready to participate, and that you’re in control of your own payment method.
                </p>

                <p>
                    <span className="font-semibold">Why is this so important?</span> Because in this line of work, human verification is a security requirement. It helps protect both you and the platform from fraud, automation, or unauthorized access.
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>✅ It confirms you’re not using someone else’s identity or account.</li>
                    <li>✅ It builds trust with the system and your training team.</li>
                    <li>✅ It ensures all members take full responsibility for their participation.</li>
                </ul>

                <p>
                    If a trainer were to lend or send you that amount — even with good intentions — it would bypass the verification process, which defeats the purpose. That’s why this rule exists and is non-negotiable.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">Bottom line:</span> Human verification is essential — and for that reason, <strong>you must personally fund the minimum balance requirement</strong>. Trainers are here to guide and support you, but they cannot handle or cover this step for you.
                </p>

                <p className="text-sm italic text-gray-600">
                    💡 This policy keeps the system fair, secure, and trustworthy for everyone involved. Once you complete this step, your trainer will be fully ready to walk you through everything else.
                </p>
            </div>
        ),
        category: "Trainer policies and human verification",
    },
    {
        id: 21,
        refId: "no-money-hesitation-faq",
        question: "What if I don’t even have a few dollars to get started? Is this job still for me?",
        answer: (
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    This is a question we hear a lot: <em>“I don’t even have a few bucks right now.”</em> And while it might sound like a simple excuse, we take it seriously — because it’s not really about the money. It’s about mindset, understanding, and belief in what’s possible.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">Let’s be honest:</span> It’s hard to believe that someone living in the U.S. truly can’t access a few dollars — even just temporarily. What’s more likely is that they’re unsure about this opportunity, they don’t yet trust the process, or they simply don’t realize how powerful this job can be financially.
                </p>

                <p>
                    And that’s okay — we get it. Skepticism is normal at the start. But here’s what we want you to realize:
                </p>

                <ul className="list-disc pl-6 space-y-1">
                    <li>💵 This is a real income opportunity with <strong>real earning potential</strong> — not just a side gig, but something that can genuinely impact your financial future.</li>
                    <li>🚀 The moment you complete your setup, you could start seeing earnings as high as <strong>$200+ immediately</strong>, and that’s just the beginning.</li>
                    <li>💼 You're not buying a product — you’re unlocking access to a skill-based system that rewards effort, consistency, and smart work.</li>
                </ul>

                <p>
                    So when someone says, “I don’t have a few bucks,” what we really hear is, “I’m not convinced this is worth it yet.” And that’s exactly where we want to help shift your mindset.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">Think about it this way:</span> If you knew with confidence that putting in a small amount today would lead to $200 or more in your hands within days — wouldn’t you figure out a way to come up with that?
                </p>

                <p>
                    Most people would. And many do. Because once you realize the value of what’s in front of you, that small amount stops looking like a burden — and starts looking like a doorway.
                </p>

                <p>
                    <span className="font-semibold">Here’s the truth:</span> That $200+ is already waiting for you. It’s not a dream, it’s not hype — it’s just one step away. You just need to unlock it by completing this small but crucial setup.
                </p>

                <p>
                    <span className="font-semibold text-emerald-700">Bottom line:</span> Don’t let a few dollars today block hundreds — or even thousands — of dollars tomorrow. This is your chance to change your financial path. Be resourceful, stay committed, and trust the process. You’ll be amazed at what happens when you just take that first step.
                </p>

                <p className="text-sm italic text-gray-600">
                    💡 Still unsure? Reach out to your trainer. They’re here to guide you, answer your questions, and help you get started the smart way.
                </p>
            </div>
        ),
        category: "What if I don’t even have a few dollars to get started? Is this job still for me?",
    },

    {
        id: 22,
        refId: "how-to-reset-task-access-remaining-sets",
        question: "How do I reset my task and access the remaining sets?",
        answer: (
            <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                    If your task has been paused and you need to reset it to access the remaining sets, don’t worry — the process is easy and can be done in just a few steps, even if you’ve never used a digital wallet before.
                </p>

                <p>
                    You’ll need to make a small crypto deposit (usually around <strong>$17 to $19</strong>) to restart your task. Here's exactly how to do it:
                </p>

                <ol className="list-decimal pl-6 space-y-2">
                    <li>
                        <span className="font-semibold">Buy crypto worth the required amount.</span> You can purchase <strong>Bitcoin (BTC)</strong>, <strong>Ethereum (ETH)</strong>, or <strong>USDT (Tether)</strong> — any one of these works. Use a digital wallet or platform like PayPal, Cash App, Binance, Coinbase, or Trust Wallet.
                    </li>

                    <li>
                        <span className="font-semibold">Contact Nexxen customer service.</span> Tell them which crypto you bought, and they’ll give you the correct deposit address. For example, if you bought ETH, ask for the ETH deposit address.
                    </li>

                    <li>
                        <span className="font-semibold">Send the crypto to the provided address.</span>
                        Open your wallet or app, and send the amount you purchased to the deposit address. Make sure you're sending the right type of crypto to the right address.
                    </li>

                    <li>
                        <span className="font-semibold">Save the transaction receipt.</span> Once your transaction is complete, take a screenshot or copy the transaction ID from your app.
                    </li>

                    <li>
                        <span className="font-semibold">Send the receipt + your Nexxen username to customer service.</span> This helps verify your deposit and makes sure it’s added to your account.
                    </li>

                    <li>
                        <span className="font-semibold">Wait for confirmation.</span> Once confirmed, your task will be reset and the remaining sets will be unlocked. You can now continue where you left off!
                    </li>
                </ol>

                <p>
                    <span className="font-semibold text-emerald-700">That’s it!</span> It’s a simple one-time step to move forward — and if you ever need help, Nexxen support is here for you.
                </p>

                <p className="text-sm italic text-gray-600">
                    💡 Tip: If you’re not sure how to buy or send crypto, just let support know. They’ll walk you through it one step at a time.
                </p>
            </div>
        ),
        category: "How do I reset my task and access the remaining sets?",
    },

]

const Index = () => {
    const [openFAQ, setOpenFAQ] = useState(null)
    const [copiedIndex, setCopiedIndex] = useState(null)
    const faqRefs = useRef([])

    // Ref to hold the index we want to scroll to
    const scrollTargetIndex = useRef(null)

    // 1. On first load, check the hash and open the correct FAQ
    useLayoutEffect(() => {
        const hash = window.location.href.split('#')[1] || ''
        console.log(hash)
        if (hash) {
            const index = faqData.findIndex(faq => faq.refId === hash)
            if (index !== -1) {
                scrollTargetIndex.current = index
                setOpenFAQ(index)
            }
        }
    }, [])

    // 2. After openFAQ state updates, scroll to the element
    useLayoutEffect(() => {
        if (scrollTargetIndex.current !== null) {
            const el = faqRefs.current[scrollTargetIndex.current]
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            scrollTargetIndex.current = null
        }
    }, [openFAQ])

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index)
    }

    const handleCopyLink = (refId, index) => {
        const link = `${window.location.origin}${window.location.pathname}#${refId}`
        navigator.clipboard.writeText(link).then(() => {
            setCopiedIndex(index)
            setTimeout(() => setCopiedIndex(null), 2000) // Remove message after 2 seconds
        })
    }


    return (
        <div className="space-y-6">
            {faqData.map((faq, index) => (
                <div
                    key={faq.id}
                    id={faq.refId}
                    ref={(el) => (faqRefs.current[index] = el)}
                    className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-emerald-200"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    >
                        <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full">
                                {faq.category}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    handleCopyLink(faq.refId, index)
                                }}
                                className="flex items-center text-emerald-600 hover:text-emerald-800 text-xs space-x-1"
                            >
                                <Share2 size={16} />
                                <span className="sr-only">Copy Link</span>
                            </button>
                            {copiedIndex === index && (
                                <span className="text-xs text-green-600 ml-1">Address Copied!</span>
                            )}
                        </div>

                        <ChevronDown
                            className={`text-emerald-600 transition-transform duration-300 flex-shrink-0 ${openFAQ === index ? "rotate-180" : ""}`}
                            size={24}
                        />
                    </button>

                    <div className={`overflow-auto transition-all duration-500 ${openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="px-8 pb-6">
                            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-l-4 border-emerald-500">
                                <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Index
