// PPTXGenJS Slides

import pptxgen from "pptxgenjs";

// 1. Create a Presentation
let pres = new pptxgen();

// 2. Add a Slide to the presentation
let slide = pres.addSlide();

// 3. Add a Title to the Slide
slide.addText("Financial Regulations in the US", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    fontSize: 32,
    color: "000000",
    fontFace: "Arial",
    bold: true
});

// 4. Add Bulletpoints to the Slide
slide.addText("Financial regulations are rules that govern financial institutions, such as banks, credit unions, and investment firms, to ensure the stability and integrity of the financial system.", {
    x: 0.5,
    y: 2.0,
    w: "90%",
    fontSize: 20,
    color: "000000",
    fontFace: "Arial",
    bullet: true,
    margin: 0.5
});

slide.addText("In the US, financial regulations are enforced by several government agencies, including the Federal Reserve, the Securities and Exchange Commission (SEC), and the Commodity Futures Trading Commission (CFTC).", {
    x: 0.5,
    y: 3.0,
    w: "90%",
    fontSize: 20,
    color: "000000",
    fontFace: "Arial",
    bullet: true,
    margin: 0.5
});

slide.addText("The Dodd-Frank Wall Street Reform and Consumer Protection Act, passed in 2010, is a major financial reform law that aims to prevent another financial crisis by regulating financial institutions and protecting consumers.", {
    x: 0.5,
    y: 4.0,
    w: "90%",
    fontSize: 20,
    color: "000000",
    fontFace: "Arial",
    bullet: true,
    margin: 0.5
});

slide.addText("Some key financial regulations in the US include the Volcker Rule, which restricts banks from making certain risky investments, and the Sarbanes-Oxley Act, which requires public companies to adhere to accounting and financial reporting standards.", {
    x: 0.5,
    y: 5.0,
    w: "90%",
    fontSize: 20,
    color: "000000",
    fontFace: "Arial",
    bullet: true,
    margin: 0.5
});
// 5. Save the Presentation
pres.writeFile({ fileName: "Sample Presentation.pptx" });