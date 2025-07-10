"use client"

import { useState } from "react"

const WALLET_INFO = {
  cashapp: {
    name: "Cash App",
    cryptoSupport: ["Bitcoin"],
    minReceive: "$1",
    maxReceive: "$2,500/week",
    verificationRequired: "Phone + SSN + ID",
    timeToSetup: "5-15 minutes",
    fees: "1.76% for instant",
    notes: "Only supports Bitcoin, very popular in US",
  },
  venmo: {
    name: "Venmo",
    cryptoSupport: ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash"],
    minReceive: "$1",
    maxReceive: "$999.99/week",
    verificationRequired: "Existing Venmo account",
    timeToSetup: "2-5 minutes",
    fees: "No fees for crypto transfers between users",
    notes: "Cannot send crypto to external wallets, only within Venmo",
  },
  paypal: {
    name: "PayPal",
    cryptoSupport: ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash"],
    minReceive: "$1",
    maxReceive: "$1,000/week",
    verificationRequired: "Existing PayPal account",
    timeToSetup: "2-5 minutes",
    fees: "No fees for receiving",
    notes: "Cannot send crypto to external wallets, only within PayPal",
  },
  coinbase: {
    name: "Coinbase",
    cryptoSupport: ["Bitcoin", "Ethereum", "USDC", "100+ others"],
    minReceive: "$2",
    maxReceive: "$25,000/day",
    verificationRequired: "ID + Bank account + Address",
    timeToSetup: "10-30 minutes",
    fees: "Free for receiving",
    notes: "Full crypto exchange, can send to external wallets",
  },
  metamask: {
    name: "MetaMask",
    cryptoSupport: ["Ethereum", "USDC", "USDT", "All ERC-20 tokens"],
    minReceive: "Any amount (gas fees apply)",
    maxReceive: "No limit",
    verificationRequired: "None",
    timeToSetup: "5-10 minutes",
    fees: "Network gas fees only",
    notes: "Self-custody wallet, you control your crypto",
  },
  robinhood: {
    name: "Robinhood",
    cryptoSupport: ["Bitcoin", "Ethereum", "Dogecoin", "Others"],
    minReceive: "$1",
    maxReceive: "$50,000/day",
    verificationRequired: "SSN + ID + Bank account",
    timeToSetup: "15-45 minutes",
    fees: "No fees",
    notes: "Can withdraw crypto to external wallets",
  },
  binance: {
    name: "Binance.US",
    cryptoSupport: ["Bitcoin", "Ethereum", "USDC", "50+ others"],
    minReceive: "$10",
    maxReceive: "$50,000/day",
    verificationRequired: "Full KYC + Bank account",
    timeToSetup: "30-60 minutes",
    fees: "Free for receiving",
    notes: "Full crypto exchange, high verification requirements",
  },
  kraken: {
    name: "Kraken",
    cryptoSupport: ["Bitcoin", "Ethereum", "USDC", "100+ others"],
    minReceive: "$5",
    maxReceive: "$100,000/day",
    verificationRequired: "ID + Address + Bank account",
    timeToSetup: "20-45 minutes",
    fees: "Free for receiving",
    notes: "Professional exchange, complex for beginners",
  },
}

export default function CryptoQuestionnaire() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState({})
  const [recommendation, setRecommendation] = useState(null)

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const handleAnswer = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      generateRecommendation()
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateRecommendation = () => {
    let rec = {
      wallet: null,
      method: null,
      timeEstimate: null,
      steps: [],
      priority: 0,
      icon: "🔗",
      difficulty: "Easy",
      limitations: [],
      fees: "",
      supportedCrypto: [],
    }

    // Check existing verified wallets first (highest priority)
    if (answers.existingWallets?.includes("cashapp") && answers.cashappVerified === "yes") {
      rec = {
        wallet: "Cash App",
        method: "Direct Bitcoin Transfer",
        timeEstimate: "2-5 minutes",
        steps: [
          "Open Cash App and tap the Bitcoin tab",
          "Tap 'Receive Bitcoin'",
          "Copy your Bitcoin address or show QR code",
          "Share address with sender",
          "Receive $20 worth of Bitcoin (minimum $1, maximum $2,500/week)",
        ],
        priority: 10,
        icon: "💰",
        difficulty: "Very Easy",
        limitations: ["Only Bitcoin supported", "Cannot receive other cryptocurrencies"],
        fees: "No fees for receiving, 1.76% for instant withdrawal",
        supportedCrypto: ["Bitcoin only"],
      }
    } else if (answers.existingWallets?.includes("venmo") && answers.venmoCrypto === "yes") {
      rec = {
        wallet: "Venmo",
        method: "Venmo Crypto Transfer",
        timeEstimate: "2-5 minutes",
        steps: [
          "Open Venmo app",
          "Go to 'Crypto' tab",
          "Share your Venmo username with sender",
          "Sender sends crypto via Venmo (minimum $1, maximum $999.99/week)",
          "IMPORTANT: Crypto stays in Venmo, cannot transfer to external wallets",
        ],
        priority: 8,
        icon: "💚",
        difficulty: "Easy",
        limitations: ["Cannot send crypto outside Venmo", "Maximum $999.99/week", "Crypto locked in Venmo ecosystem"],
        fees: "No fees for receiving crypto",
        supportedCrypto: ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash"],
      }
    } else if (answers.existingWallets?.includes("paypal") && answers.paypalCrypto === "yes") {
      rec = {
        wallet: "PayPal",
        method: "PayPal Crypto Transfer",
        timeEstimate: "2-5 minutes",
        steps: [
          "Open PayPal app or website",
          "Go to 'Crypto' section",
          "Share your PayPal email with sender",
          "Sender sends crypto via PayPal (minimum $1, maximum $1,000/week)",
          "IMPORTANT: Crypto stays in PayPal, cannot transfer to external wallets",
        ],
        priority: 7,
        icon: "💙",
        difficulty: "Easy",
        limitations: ["Cannot send crypto outside PayPal", "Maximum $1,000/week", "Crypto locked in PayPal ecosystem"],
        fees: "No fees for receiving crypto",
        supportedCrypto: ["Bitcoin", "Ethereum", "Litecoin", "Bitcoin Cash"],
      }
    } else if (answers.existingWallets?.includes("metamask")) {
      rec = {
        wallet: "MetaMask",
        method: "Direct Crypto Transfer",
        timeEstimate: "2-5 minutes",
        steps: [
          "Open MetaMask wallet",
          "Copy your wallet address (starts with 0x...)",
          "Share address with sender",
          "Sender transfers ETH, USDC, or USDT directly",
          "You have full control of your crypto",
        ],
        priority: 9,
        icon: "🦊",
        difficulty: "Easy",
        limitations: ["Gas fees required for transactions (usually $2-20)", "Need to understand wallet security"],
        fees: "Network gas fees only (varies $2-20)",
        supportedCrypto: ["Ethereum", "USDC", "USDT", "All ERC-20 tokens"],
      }
    } else if (answers.existingWallets?.includes("coinbase") && answers.coinbaseVerified === "yes") {
      rec = {
        wallet: "Coinbase",
        method: "Coinbase Transfer",
        timeEstimate: "5-15 minutes",
        steps: [
          "Log into Coinbase account",
          "Go to 'Receive' section",
          "Select cryptocurrency (Bitcoin, Ethereum, or USDC)",
          "Copy receiving address",
          "Share address with sender (minimum $2 receive)",
        ],
        priority: 8,
        icon: "🔵",
        difficulty: "Easy",
        limitations: ["Minimum $2 receive", "Full KYC verification required"],
        fees: "Free for receiving crypto",
        supportedCrypto: ["Bitcoin", "Ethereum", "USDC", "100+ cryptocurrencies"],
      }
    }
    // Quick setup options for new users
    else if (answers.hasSSN === "yes" && answers.hasPhone === "yes") {
      rec = {
        wallet: "Cash App (New Setup)",
        method: "Setup Cash App + Bitcoin Feature",
        timeEstimate: "10-20 minutes",
        steps: [
          "Download Cash App from App Store/Google Play",
          "Sign up with US phone number",
          "Verify identity with SSN and ID photo",
          "Enable Bitcoin feature in app",
          "Get Bitcoin address and share with sender",
          "Receive $20 Bitcoin (fees: 1.76% for instant withdrawal)",
        ],
        priority: 6,
        icon: "💰",
        difficulty: "Medium",
        limitations: ["Only Bitcoin supported", "Requires US phone + SSN"],
        fees: "No fees for receiving, 1.76% for instant withdrawal",
        supportedCrypto: ["Bitcoin only"],
      }
    }
    // Card-based purchase options
    else if (answers.hasDebitCard === "yes" && answers.cardBalance >= 25) {
      rec = {
        wallet: "Buy Crypto + MetaMask",
        method: "Purchase via MoonPay/Simplex + Transfer",
        timeEstimate: "15-30 minutes",
        steps: [
          "Download MetaMask wallet app",
          "Create new wallet and save recovery phrase securely",
          "Use MoonPay or Simplex to buy crypto with debit card",
          "Minimum purchase usually $20-50, fees 3-5%",
          "Transfer purchased crypto to MetaMask",
          "Share MetaMask address for additional transfers",
        ],
        priority: 5,
        icon: "💳",
        difficulty: "Medium",
        limitations: ["Higher fees (3-5% for card purchases)", "Minimum purchase $20-50", "Card verification required"],
        fees: "3-5% for card purchases + network fees",
        supportedCrypto: ["Bitcoin", "Ethereum", "USDC", "Major cryptocurrencies"],
      }
    }
    // Fallback options
    else {
      rec = {
        wallet: "MetaMask (Recommended)",
        method: "New Wallet Setup",
        timeEstimate: "20-45 minutes",
        steps: [
          "Download MetaMask browser extension or mobile app",
          "Create new wallet and save 12-word recovery phrase safely",
          "Copy your wallet address (starts with 0x...)",
          "Share address with sender",
          "Sender purchases crypto and transfers to your wallet",
          "You have full control of your cryptocurrency",
        ],
        priority: 3,
        icon: "🦊",
        difficulty: "Medium",
        limitations: [
          "Need to learn wallet security basics",
          "Gas fees for transactions",
          "Sender needs to buy crypto first",
        ],
        fees: "Network gas fees only (varies $2-20)",
        supportedCrypto: ["Ethereum", "USDC", "USDT", "All ERC-20 tokens"],
      }
    }

    setRecommendation(rec)
    setCurrentStep(totalSteps + 1)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>💼</div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Current Wallets & Apps</h3>
              <p style={{ color: "#666", fontSize: "16px" }}>
                Select all apps you currently have on your phone or computer
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px",
                marginBottom: "20px",
              }}
            >
              {Object.entries(WALLET_INFO).map(([key, wallet]) => (
                <div
                  key={key}
                  style={{
                    border: "2px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "16px",
                    backgroundColor: answers.existingWallets?.includes(key) ? "#f0f9ff" : "white",
                    borderColor: answers.existingWallets?.includes(key) ? "#3b82f6" : "#e5e7eb",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <input
                      type="checkbox"
                      id={key}
                      checked={answers.existingWallets?.includes(key) || false}
                      onChange={(e) => {
                        const current = answers.existingWallets || []
                        if (e.target.checked) {
                          handleAnswer("existingWallets", [...current, key])
                        } else {
                          handleAnswer(
                            "existingWallets",
                            current.filter((w) => w !== key),
                          )
                        }
                      }}
                      style={{ marginTop: "4px" }}
                    />
                    <div style={{ flex: 1 }}>
                      <label
                        htmlFor={key}
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          cursor: "pointer",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        {wallet.name}
                      </label>
                      <div style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
                        <strong>Supports:</strong> {wallet.cryptoSupport.join(", ")}
                      </div>
                      <div style={{ fontSize: "14px", color: "#666", marginBottom: "4px" }}>
                        <strong>Min/Max:</strong> {wallet.minReceive} - {wallet.maxReceive}
                      </div>
                      <div style={{ fontSize: "14px", color: "#666", marginBottom: "4px" }}>
                        <strong>Setup time:</strong> {wallet.timeToSetup}
                      </div>
                      <div style={{ fontSize: "12px", color: "#888", fontStyle: "italic" }}>{wallet.notes}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                border: "2px dashed #d1d5db",
                borderRadius: "12px",
                padding: "16px",
                backgroundColor: answers.existingWallets?.includes("none") ? "#fef3c7" : "white",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <input
                  type="checkbox"
                  id="none"
                  checked={answers.existingWallets?.includes("none") || false}
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleAnswer("existingWallets", ["none"])
                    }
                  }}
                />
                <label htmlFor="none" style={{ fontSize: "18px", fontWeight: "600", cursor: "pointer" }}>
                  ❌ I don't have any of these apps
                </label>
              </div>
            </div>
          </div>
        )

      case 2:
        if (!answers.existingWallets?.length || answers.existingWallets.includes("none")) {
          return (
            <div style={{ padding: "20px" }}>
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <div style={{ fontSize: "64px", marginBottom: "16px" }}>📱</div>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Basic Requirements</h3>
                <p style={{ color: "#666", fontSize: "16px" }}>Let's check what you have available for quick setup</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ border: "2px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
                    📱 Do you have a US phone number?
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="hasPhone"
                        value="yes"
                        checked={answers.hasPhone === "yes"}
                        onChange={(e) => handleAnswer("hasPhone", e.target.value)}
                      />
                      <span style={{ fontSize: "16px" }}>✅ Yes, I have a US phone number</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="hasPhone"
                        value="no"
                        checked={answers.hasPhone === "no"}
                        onChange={(e) => handleAnswer("hasPhone", e.target.value)}
                      />
                      <span style={{ fontSize: "16px" }}>❌ No, I don't have a US phone number</span>
                    </label>
                  </div>
                </div>
                <div style={{ border: "2px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
                    🆔 Do you have a Social Security Number (SSN)?
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="hasSSN"
                        value="yes"
                        checked={answers.hasSSN === "yes"}
                        onChange={(e) => handleAnswer("hasSSN", e.target.value)}
                      />
                      <span style={{ fontSize: "16px" }}>✅ Yes, I have an SSN</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="hasSSN"
                        value="no"
                        checked={answers.hasSSN === "no"}
                        onChange={(e) => handleAnswer("hasSSN", e.target.value)}
                      />
                      <span style={{ fontSize: "16px" }}>❌ No, I don't have an SSN</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )
        } else {
          return renderWalletVerification()
        }

      case 3:
        if (answers.existingWallets?.includes("none")) {
          return (
            <div style={{ padding: "20px" }}>
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <div style={{ fontSize: "64px", marginBottom: "16px" }}>💳</div>
                <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Payment Options</h3>
                <p style={{ color: "#666", fontSize: "16px" }}>
                  Alternative ways to get crypto if you don't have wallets
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ border: "2px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
                  <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
                    💳 Do you have a debit card or credit card?
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="hasDebitCard"
                        value="yes"
                        checked={answers.hasDebitCard === "yes"}
                        onChange={(e) => handleAnswer("hasDebitCard", e.target.value)}
                      />
                      <span style={{ fontSize: "16px" }}>✅ Yes, I have a debit/credit card</span>
                    </label>
                    <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="hasDebitCard"
                        value="no"
                        checked={answers.hasDebitCard === "no"}
                        onChange={(e) => handleAnswer("hasDebitCard", e.target.value)}
                      />
                      <span style={{ fontSize: "16px" }}>❌ No, I don't have any cards</span>
                    </label>
                  </div>
                </div>
                {answers.hasDebitCard === "yes" && (
                  <div
                    style={{
                      border: "2px solid #3b82f6",
                      borderRadius: "12px",
                      padding: "20px",
                      backgroundColor: "#f0f9ff",
                    }}
                  >
                    <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
                      💰 Available balance on your card (USD)
                    </h4>
                    <input
                      type="number"
                      placeholder="Enter amount (minimum $25 recommended)"
                      value={answers.cardBalance || ""}
                      onChange={(e) => handleAnswer("cardBalance", Number.parseInt(e.target.value) || 0)}
                      style={{
                        width: "100%",
                        padding: "12px",
                        fontSize: "16px",
                        border: "2px solid #d1d5db",
                        borderRadius: "8px",
                        marginBottom: "8px",
                      }}
                    />
                    <p style={{ fontSize: "14px", color: "#666" }}>
                      <strong>Note:</strong> Card purchases typically have 3-5% fees. We recommend at least $25 to cover
                      fees and get $20 worth of crypto.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )
        } else {
          return renderAdditionalWalletQuestions()
        }

      case 4:
        return (
          <div style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>🎓</div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Crypto Experience</h3>
              <p style={{ color: "#666", fontSize: "16px" }}>This helps us give you the right level of instructions</p>
            </div>
            <div style={{ border: "2px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
              <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
                How familiar are you with cryptocurrency?
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    backgroundColor: answers.cryptoExperience === "beginner" ? "#f0f9ff" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="cryptoExperience"
                    value="beginner"
                    checked={answers.cryptoExperience === "beginner"}
                    onChange={(e) => handleAnswer("cryptoExperience", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>🆕 Complete beginner - I've never used crypto before</span>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    backgroundColor: answers.cryptoExperience === "some" ? "#f0f9ff" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="cryptoExperience"
                    value="some"
                    checked={answers.cryptoExperience === "some"}
                    onChange={(e) => handleAnswer("cryptoExperience", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>📚 I know a little - I've heard about Bitcoin and Ethereum</span>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    backgroundColor: answers.cryptoExperience === "experienced" ? "#f0f9ff" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="cryptoExperience"
                    value="experienced"
                    checked={answers.cryptoExperience === "experienced"}
                    onChange={(e) => handleAnswer("cryptoExperience", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>🚀 I'm experienced - I've bought/sold crypto before</span>
                </label>
              </div>
            </div>
          </div>
        )

      case 5:
        return (
          <div style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>₿</div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Crypto Preference</h3>
              <p style={{ color: "#666", fontSize: "16px" }}>Which cryptocurrency would you like to receive?</p>
            </div>
            <div style={{ border: "2px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
              <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
                Choose your preferred cryptocurrency:
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    backgroundColor: answers.preferredCrypto === "bitcoin" ? "#f0f9ff" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="preferredCrypto"
                    value="bitcoin"
                    checked={answers.preferredCrypto === "bitcoin"}
                    onChange={(e) => handleAnswer("preferredCrypto", e.target.value)}
                  />
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>₿ Bitcoin (BTC)</div>
                    <div style={{ fontSize: "14px", color: "#666" }}>The original cryptocurrency, widely accepted</div>
                  </div>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    backgroundColor: answers.preferredCrypto === "ethereum" ? "#f0f9ff" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="preferredCrypto"
                    value="ethereum"
                    checked={answers.preferredCrypto === "ethereum"}
                    onChange={(e) => handleAnswer("preferredCrypto", e.target.value)}
                  />
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>Ξ Ethereum (ETH)</div>
                    <div style={{ fontSize: "14px", color: "#666" }}>
                      Smart contract platform, second largest crypto
                    </div>
                  </div>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    backgroundColor: answers.preferredCrypto === "usdc" ? "#f0f9ff" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="preferredCrypto"
                    value="usdc"
                    checked={answers.preferredCrypto === "usdc"}
                    onChange={(e) => handleAnswer("preferredCrypto", e.target.value)}
                  />
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>💵 USDC (USD Coin)</div>
                    <div style={{ fontSize: "14px", color: "#666" }}>
                      Stable coin - always $1 = 1 USDC, no price volatility
                    </div>
                  </div>
                </label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    padding: "12px",
                    border: "1px solid #d1d5db",
                    borderRadius: "8px",
                    backgroundColor: answers.preferredCrypto === "any" ? "#f0f9ff" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="preferredCrypto"
                    value="any"
                    checked={answers.preferredCrypto === "any"}
                    onChange={(e) => handleAnswer("preferredCrypto", e.target.value)}
                  />
                  <div>
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>🤷‍♂️ Any is fine</div>
                    <div style={{ fontSize: "14px", color: "#666" }}>You choose what's easiest and fastest</div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )

      case 6:
        return (
          <div style={{ padding: "20px" }}>
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{ fontSize: "64px", marginBottom: "16px" }}>⏰</div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Final Details</h3>
              <p style={{ color: "#666", fontSize: "16px" }}>
                Just a few more questions to give you the best recommendation
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ border: "2px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
                <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
                  ⏰ How quickly do you need the crypto?
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      backgroundColor: answers.urgency === "immediate" ? "#f0f9ff" : "white",
                    }}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value="immediate"
                      checked={answers.urgency === "immediate"}
                      onChange={(e) => handleAnswer("urgency", e.target.value)}
                    />
                    <span style={{ fontSize: "16px" }}>🚨 Right now (within 10 minutes)</span>
                  </label>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      backgroundColor: answers.urgency === "today" ? "#f0f9ff" : "white",
                    }}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value="today"
                      checked={answers.urgency === "today"}
                      onChange={(e) => handleAnswer("urgency", e.target.value)}
                    />
                    <span style={{ fontSize: "16px" }}>📅 Today (within a few hours)</span>
                  </label>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                      padding: "12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      backgroundColor: answers.urgency === "flexible" ? "#f0f9ff" : "white",
                    }}
                  >
                    <input
                      type="radio"
                      name="urgency"
                      value="flexible"
                      checked={answers.urgency === "flexible"}
                      onChange={(e) => handleAnswer("urgency", e.target.value)}
                    />
                    <span style={{ fontSize: "16px" }}>😌 I'm flexible (within a week)</span>
                  </label>
                </div>
              </div>
              <div
                style={{
                  border: "2px solid #3b82f6",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#f0f9ff",
                }}
              >
                <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>
                  📧 Email address (optional)
                </h4>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={answers.email || ""}
                  onChange={(e) => handleAnswer("email", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    border: "2px solid #d1d5db",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                />
                <p style={{ fontSize: "14px", color: "#666" }}>
                  We'll use this for wallet setup instructions if needed
                </p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const renderWalletVerification = () => {
    const wallets = answers.existingWallets || []
    return (
      <div style={{ padding: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{ fontSize: "64px", marginBottom: "16px" }}>✅</div>
          <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Wallet Verification</h3>
          <p style={{ color: "#666", fontSize: "16px" }}>Let's check if your existing wallets are ready for crypto</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {wallets.includes("cashapp") && (
            <div
              style={{ border: "2px solid #10b981", borderRadius: "12px", padding: "20px", backgroundColor: "#f0fdf4" }}
            >
              <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>💰 Cash App Bitcoin Status</h4>
              <div style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
                <strong>Cash App Info:</strong> Only supports Bitcoin. Min: $1, Max: $2,500/week. Fees: 1.76% for
                instant withdrawal.
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="cashappVerified"
                    value="yes"
                    checked={answers.cashappVerified === "yes"}
                    onChange={(e) => handleAnswer("cashappVerified", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>✅ Yes, I can send/receive Bitcoin on Cash App</span>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="cashappVerified"
                    value="no"
                    checked={answers.cashappVerified === "no"}
                    onChange={(e) => handleAnswer("cashappVerified", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>❌ No, Bitcoin feature is not enabled</span>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="cashappVerified"
                    value="unsure"
                    checked={answers.cashappVerified === "unsure"}
                    onChange={(e) => handleAnswer("cashappVerified", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>🤔 I'm not sure how to check</span>
                </label>
              </div>
            </div>
          )}
          {wallets.includes("venmo") && (
            <div
              style={{ border: "2px solid #10b981", borderRadius: "12px", padding: "20px", backgroundColor: "#f0fdf4" }}
            >
              <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>💚 Venmo Crypto Feature</h4>
              <div style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
                <strong>Venmo Info:</strong> Supports Bitcoin, Ethereum, Litecoin, Bitcoin Cash. Min: $1, Max:
                $999.99/week.
                <strong style={{ color: "#dc2626" }}> WARNING: Cannot send crypto outside Venmo!</strong>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="venmoCrypto"
                    value="yes"
                    checked={answers.venmoCrypto === "yes"}
                    onChange={(e) => handleAnswer("venmoCrypto", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>✅ Yes, I can buy/sell crypto on Venmo</span>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="venmoCrypto"
                    value="no"
                    checked={answers.venmoCrypto === "no"}
                    onChange={(e) => handleAnswer("venmoCrypto", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>❌ No, I don't see crypto options</span>
                </label>
              </div>
            </div>
          )}
          {wallets.includes("paypal") && (
            <div
              style={{ border: "2px solid #3b82f6", borderRadius: "12px", padding: "20px", backgroundColor: "#f0f9ff" }}
            >
              <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>💙 PayPal Crypto Feature</h4>
              <div style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
                <strong>PayPal Info:</strong> Supports Bitcoin, Ethereum, Litecoin, Bitcoin Cash. Min: $1, Max:
                $1,000/week.
                <strong style={{ color: "#dc2626" }}> WARNING: Cannot send crypto outside PayPal!</strong>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="paypalCrypto"
                    value="yes"
                    checked={answers.paypalCrypto === "yes"}
                    onChange={(e) => handleAnswer("paypalCrypto", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>✅ Yes, I can buy/sell crypto on PayPal</span>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="paypalCrypto"
                    value="no"
                    checked={answers.paypalCrypto === "no"}
                    onChange={(e) => handleAnswer("paypalCrypto", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>❌ No, I don't see crypto options</span>
                </label>
              </div>
            </div>
          )}
          {wallets.includes("coinbase") && (
            <div
              style={{ border: "2px solid #3b82f6", borderRadius: "12px", padding: "20px", backgroundColor: "#f0f9ff" }}
            >
              <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>🔵 Coinbase Verification</h4>
              <div style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
                <strong>Coinbase Info:</strong> Supports 100+ cryptocurrencies. Min: $2, Max: $25,000/day. Full crypto
                exchange.
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="coinbaseVerified"
                    value="yes"
                    checked={answers.coinbaseVerified === "yes"}
                    onChange={(e) => handleAnswer("coinbaseVerified", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>✅ Yes, fully verified and can trade</span>
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                  <input
                    type="radio"
                    name="coinbaseVerified"
                    value="no"
                    checked={answers.coinbaseVerified === "no"}
                    onChange={(e) => handleAnswer("coinbaseVerified", e.target.value)}
                  />
                  <span style={{ fontSize: "16px" }}>❌ No, still need to verify identity</span>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderAdditionalWalletQuestions = () => {
    return (
      <div style={{ padding: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div style={{ fontSize: "64px", marginBottom: "16px" }}>📋</div>
          <h3 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Additional Information</h3>
          <p style={{ color: "#666", fontSize: "16px" }}>A few more details to optimize your experience</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ border: "2px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>📱 US Phone Number</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="hasPhone2"
                  value="yes"
                  checked={answers.hasPhone === "yes"}
                  onChange={(e) => handleAnswer("hasPhone", e.target.value)}
                />
                <span style={{ fontSize: "16px" }}>✅ Yes, I have a US phone number</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="hasPhone2"
                  value="no"
                  checked={answers.hasPhone === "no"}
                  onChange={(e) => handleAnswer("hasPhone", e.target.value)}
                />
                <span style={{ fontSize: "16px" }}>❌ No, I don't have a US phone number</span>
              </label>
            </div>
          </div>
          <div style={{ border: "2px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
            <h4 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px" }}>🆔 Social Security Number</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="hasSSN2"
                  value="yes"
                  checked={answers.hasSSN === "yes"}
                  onChange={(e) => handleAnswer("hasSSN", e.target.value)}
                />
                <span style={{ fontSize: "16px" }}>✅ Yes, I have an SSN</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="hasSSN2"
                  value="no"
                  checked={answers.hasSSN === "no"}
                  onChange={(e) => handleAnswer("hasSSN", e.target.value)}
                />
                <span style={{ fontSize: "16px" }}>❌ No, I don't have an SSN</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (currentStep > totalSteps) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                color: "white",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "80px", marginBottom: "20px" }}>{recommendation?.icon}</div>
              <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "8px", margin: 0 }}>
                ✅ Perfect Match Found!
              </h1>
              <p style={{ fontSize: "18px", opacity: 0.9, margin: 0 }}>Here's the fastest way to get your $20 crypto</p>
            </div>
            <div style={{ padding: "40px" }}>
              <div
                style={{
                  background: "linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 100%)",
                  border: "3px solid #10b981",
                  borderRadius: "16px",
                  padding: "30px",
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "20px",
                  }}
                >
                  <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#065f46", margin: 0 }}>
                    {recommendation?.wallet}
                  </h2>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "14px", color: "#10b981", fontWeight: "600" }}>
                      {recommendation?.difficulty}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#10b981",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      ⏰ {recommendation?.timeEstimate}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "18px", color: "#065f46", fontWeight: "600", marginBottom: "20px" }}>
                  {recommendation?.method}
                </p>
                <div style={{ fontSize: "16px", color: "#065f46", marginBottom: "16px" }}>
                  <strong>Supported Crypto:</strong> {recommendation?.supportedCrypto.join(", ")}
                </div>
                <div style={{ fontSize: "16px", color: "#065f46", marginBottom: "16px" }}>
                  <strong>Fees:</strong> {recommendation?.fees}
                </div>
                {recommendation?.limitations.length > 0 && (
                  <div
                    style={{
                      backgroundColor: "#fef3c7",
                      border: "2px solid #f59e0b",
                      borderRadius: "8px",
                      padding: "16px",
                      marginTop: "16px",
                    }}
                  >
                    <h4 style={{ fontSize: "16px", fontWeight: "600", color: "#92400e", margin: "0 0 8px 0" }}>
                      ⚠️ Important Limitations:
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: "20px", color: "#92400e" }}>
                      {recommendation?.limitations.map((limitation, index) => (
                        <li key={index} style={{ marginBottom: "4px" }}>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  border: "2px solid #e5e7eb",
                  borderRadius: "16px",
                  padding: "30px",
                  marginBottom: "30px",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "#3b82f6",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                    }}
                  >
                    📋
                  </span>
                  Step-by-Step Instructions:
                </h3>
                <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {recommendation?.steps.map((step, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }}>
                      <span
                        style={{
                          backgroundColor: "#3b82f6",
                          color: "white",
                          borderRadius: "50%",
                          width: "32px",
                          height: "32px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "14px",
                          fontWeight: "bold",
                          marginRight: "16px",
                          marginTop: "4px",
                          flexShrink: 0,
                        }}
                      >
                        {index + 1}
                      </span>
                      <span style={{ fontSize: "18px", lineHeight: "1.6" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div
                style={{
                  backgroundColor: "#f0f9ff",
                  border: "2px solid #3b82f6",
                  borderRadius: "16px",
                  padding: "30px",
                  marginBottom: "30px",
                }}
              >
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#1e40af",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  💰 Your Profile Summary:
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px",
                    color: "#1e40af",
                  }}
                >
                  <div>
                    <p style={{ marginBottom: "12px", fontSize: "16px" }}>
                      <strong>Existing wallets:</strong>
                      <br />
                      {answers.existingWallets?.filter((w) => w !== "none").join(", ") || "None"}
                    </p>
                    <p style={{ marginBottom: "12px", fontSize: "16px" }}>
                      <strong>Preferred crypto:</strong>
                      <br />
                      {answers.preferredCrypto || "Any"}
                    </p>
                  </div>
                  <div>
                    <p style={{ marginBottom: "12px", fontSize: "16px" }}>
                      <strong>Urgency:</strong>
                      <br />
                      {answers.urgency || "Not specified"}
                    </p>
                    <p style={{ marginBottom: "12px", fontSize: "16px" }}>
                      <strong>Experience:</strong>
                      <br />
                      {answers.cryptoExperience || "Not specified"}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button
                  onClick={() => {
                    setCurrentStep(1)
                    setAnswers({})
                    setRecommendation(null)
                  }}
                  style={{
                    flex: 1,
                    minWidth: "200px",
                    padding: "16px 24px",
                    fontSize: "18px",
                    fontWeight: "600",
                    backgroundColor: "white",
                    color: "#374151",
                    border: "2px solid #d1d5db",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#f9fafb"
                    e.target.style.borderColor = "#9ca3af"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "white"
                    e.target.style.borderColor = "#d1d5db"
                  }}
                >
                  Start New Questionnaire
                </button>
                <button
                  onClick={() => window.print()}
                  style={{
                    flex: 1,
                    minWidth: "200px",
                    padding: "16px 24px",
                    fontSize: "18px",
                    fontWeight: "600",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#2563eb"
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#3b82f6"
                  }}
                >
                  Print Instructions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              color: "white",
              padding: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "8px",
                margin: "0 0 8px 0",
              }}
            >
              🚀 Crypto Wallet Finder
            </h1>
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                opacity: 0.9,
                marginBottom: "30px",
                margin: "0 0 30px 0",
              }}
            >
              Find the fastest way to receive $20 in cryptocurrency
            </p>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                  opacity: 0.9,
                  marginBottom: "8px",
                }}
              >
                <span style={{ fontWeight: "600" }}>
                  Step {currentStep} of {totalSteps}
                </span>
                <span style={{ fontWeight: "600" }}>{Math.round(progress)}% Complete</span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "6px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "white",
                    borderRadius: "6px",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ padding: "40px" }}>
            {renderStep()}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px" }}>
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                style={{
                  padding: "12px 32px",
                  fontSize: "18px",
                  fontWeight: "600",
                  backgroundColor: currentStep === 1 ? "#f3f4f6" : "white",
                  color: currentStep === 1 ? "#9ca3af" : "#374151",
                  border: "2px solid #d1d5db",
                  borderRadius: "12px",
                  cursor: currentStep === 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  if (currentStep !== 1) {
                    e.target.style.backgroundColor = "#f9fafb"
                    e.target.style.borderColor = "#9ca3af"
                  }
                }}
                onMouseOut={(e) => {
                  if (currentStep !== 1) {
                    e.target.style.backgroundColor = "white"
                    e.target.style.borderColor = "#d1d5db"
                  }
                }}
              >
                ← Previous
              </button>
              <button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !answers.existingWallets?.length) ||
                  (currentStep === 2 &&
                    answers.existingWallets?.includes("none") &&
                    (!answers.hasPhone || !answers.hasSSN)) ||
                  (currentStep === 4 && !answers.cryptoExperience) ||
                  (currentStep === 5 && !answers.preferredCrypto) ||
                  (currentStep === 6 && !answers.urgency)
                }
                style={{
                  padding: "12px 32px",
                  fontSize: "18px",
                  fontWeight: "600",
                  backgroundColor:
                    (currentStep === 1 && !answers.existingWallets?.length) ||
                    (currentStep === 2 &&
                      answers.existingWallets?.includes("none") &&
                      (!answers.hasPhone || !answers.hasSSN)) ||
                    (currentStep === 4 && !answers.cryptoExperience) ||
                    (currentStep === 5 && !answers.preferredCrypto) ||
                    (currentStep === 6 && !answers.urgency)
                      ? "#f3f4f6"
                      : "#3b82f6",
                  color:
                    (currentStep === 1 && !answers.existingWallets?.length) ||
                    (currentStep === 2 &&
                      answers.existingWallets?.includes("none") &&
                      (!answers.hasPhone || !answers.hasSSN)) ||
                    (currentStep === 4 && !answers.cryptoExperience) ||
                    (currentStep === 5 && !answers.preferredCrypto) ||
                    (currentStep === 6 && !answers.urgency)
                      ? "#9ca3af"
                      : "white",
                  border: "none",
                  borderRadius: "12px",
                  cursor:
                    (currentStep === 1 && !answers.existingWallets?.length) ||
                    (currentStep === 2 &&
                      answers.existingWallets?.includes("none") &&
                      (!answers.hasPhone || !answers.hasSSN)) ||
                    (currentStep === 4 && !answers.cryptoExperience) ||
                    (currentStep === 5 && !answers.preferredCrypto) ||
                    (currentStep === 6 && !answers.urgency)
                      ? "not-allowed"
                      : "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  if (
                    !(
                      (currentStep === 1 && !answers.existingWallets?.length) ||
                      (currentStep === 2 &&
                        answers.existingWallets?.includes("none") &&
                        (!answers.hasPhone || !answers.hasSSN)) ||
                      (currentStep === 4 && !answers.cryptoExperience) ||
                      (currentStep === 5 && !answers.preferredCrypto) ||
                      (currentStep === 6 && !answers.urgency)
                    )
                  ) {
                    e.target.style.backgroundColor = "#2563eb"
                  }
                }}
                onMouseOut={(e) => {
                  if (
                    !(
                      (currentStep === 1 && !answers.existingWallets?.length) ||
                      (currentStep === 2 &&
                        answers.existingWallets?.includes("none") &&
                        (!answers.hasPhone || !answers.hasSSN)) ||
                      (currentStep === 4 && !answers.cryptoExperience) ||
                      (currentStep === 5 && !answers.preferredCrypto) ||
                      (currentStep === 6 && !answers.urgency)
                    )
                  ) {
                    e.target.style.backgroundColor = "#3b82f6"
                  }
                }}
              >
                {currentStep === totalSteps ? "Get My Recommendation 🎯" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
