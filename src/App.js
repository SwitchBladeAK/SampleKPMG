import "./App.css";
import { useState, useEffect } from "react";
import Layout from "./components/layout/index";
import CommonPage from "./components/molecules/CommonPage";
import KPMGContext from "./context/SampleContext";
import { businessEntityData, lookupTypeData } from "./data/tableData";

// icons
import BusinessEntity from "./assets/images/Business entity.svg";
import BusinessEntitySelected from "./assets/images/Business entity - selected.svg";
import Function from "./assets/images/Function.svg";
import FunctionSelected from "./assets/images/Function - selected.svg";
import Data from "./assets/images/Data.svg";
import DataSelected from "./assets/images/Data - selected.svg";
import Attributes from "./assets/images/Attributes.svg";
import AttributesSelected from "./assets/images/Attributes - selected.svg";
import References from "./assets/images/References.svg";
import ReferencesSelected from "./assets/images/References - selected.svg";
import Sections from "./assets/images/Sections.svg";
import SectionsSelected from "./assets/images/Sections - selected.svg";

function App() {

  const [pageLabels, setPageLabels] = useState({
    name: "Lookup Type",
    dataIndex: 0,
    data: lookupTypeData,
  });

  const pages = [
    {
      name: "Business Entity",
      notSelected: BusinessEntity,
      selected: BusinessEntitySelected,
      data: businessEntityData,
    },
    {
      name: "Data Entity",
      notSelected: Data,
      selected: DataSelected,
      data: [],
    },
    {
      name: "Function",
      notSelected: Function,
      selected: FunctionSelected,
      data: [],
    },
    {
      name: "Section",
      notSelected: Sections,
      selected: SectionsSelected,
      data: [],
    },
    {
      name: "Attributes",
      notSelected: Attributes,
      selected: AttributesSelected,
      data: [],
    },
    {
      name: "References",
      notSelected: References,
      selected: ReferencesSelected,
      data: lookupTypeData,
    },
  ];

  const handleCardClick = (index) => {
    setPageLabels({
      name: pages[index].name,
      dataIndex: 1,
      data: businessEntityData,
    });

    setSelectedCard(index);
  };

  const [selectedCard, setSelectedCard] = useState(5);

  useEffect(() => {}, [pageLabels]);

  return (
    <KPMGContext.Provider
      value={{
        pageLabels,
        setPageLabels,
      }}
    >
      <div className="overflow-hidden">
        <Layout>
          <CommonPage
            handleCardClick={handleCardClick}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            pages={pages}
          />
        </Layout>
      </div>
    </KPMGContext.Provider>
  );
}

export default App;
