import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/HomePage/Footer';

const blog = {
  title: "Critical checklist for site engineers while constructing a building",
  description: "By Editor, Varun Misra",
  content: [
    {
      heading: "Phase 1: PCC",
      points: [
        "Ensure footing area is not wet – zero water should be there as water leads to corrosion of the steel. Footing can either be in joint for 2 columns or single column. The span of the footing is provided by the structural engineer. Generally, for S+3 or S+4 house, take 6*6 feet as span for single column and 10*6.5 feet as span for double column.",
        "PCC of 400 MM ~ 1.3 Feet for strong base to be done for all columns across site with accurate measurements",
        "Column footing marking to be done by Architect/ Site Engineer - Layout as per drawing and exact dimensions. Make sure all footings/ PCC are at same level using Plum Bob",
        "Write date on every column’s footing as Curing (taraai) has to be done for 10 continuous days of this PCC footing. Curing to be done with gunny/ jute bags.",
        "Centre of this footing has to be set up using a measuring tape. The centre of all columns has to be aligned so that there is exact measurement that’s established in the footing across the base for all columns. The centre point of all these PCC bases will serve as the focal point where the column has to stand vertically."
      ]
    },
    {
      heading: "Phase 2: Steel work",
      points: [
        "The mesh of specified steel has to be laid down as per specifications given by architect. The steel mesh has to be laid down on cover blocks of 75 MM of PCC or RCC (as specified by Structural engineer) appropriately. Generally, 5 cover blocks per 1 sq meter are to be placed.",
        "Keep the centre of the column on the centre of the PCC area. Make sure the “L” of the column steel has to be on all sides so that there is no chance of failure of the column owing to load.",
        "Make sure that spacing in mesh/ jaali is accurate and same across all the spaces in the mesh. The variance of 5-10% is ok and acceptable.",
        "Development Length of the main column steel: Whatever part of the steel column is covered in mortar, that’s the development length of the main steel re bar and is generally taken as 50D (50 * Diameter of steel ~ say if 16 MM steel is used). There are 8 such folded development lengths in each column. The building load is distributed using these development lengths. Mandrill has to be used to bend this at 8D degree angle/ or as explained in structural engineer diagram. Example – for 16MM steel, 8D ~ 128 degrees.",
        "Rings on the column: Size of the ring (in MM) and the spacing of the ring will be specified by the structural engineer in drawing. The spacing will also be mentioned in MM. Spacing in bottom zone is less. Spacing in lapping zone can be slightly more.",
        "Zone in the column: Up to approx. 1 metre of the column from slab level is risky zone. No lapping to be done in this zone of the column.",
        "Hooks use while tying column steel: Hooks are provided at 10D of the ring size. Say the ring being used is of 8MM steel, then hook’s length has to be at 10*8 ~ 80 MM. Hooks are to be provided at staggered places to counter sheer value and to hold the rings together.",
        "Binding wire: Binding wire has to be used as suggested by structural engineer as it holds the entire mesh together.",
        "Use of chair between lower and upper mesh makes sure that the cage doesn’t collapse due to stress after the mortar is poured into the cage.",
        "Use of cover block between the mesh and shuttering is mandatory so that the steel of the mesh is not exposed to the ground/ mitti and seepage doesn’t flow in owing to this exposure over long period of time.",
        "Using plum bob check the verticality of all the steel bars in the column cage. If there is any issue it has to be fixed now as you cannot bend the column later on.",
        "Last step is to pour M25 grade concrete, make sure vibrator is used so that the concrete reaches inside the entire spacing of the mesh and column. Once the concrete has been poured, the verticality has to be checked again as sometimes, vibrator can move the placement of steel.",
        "Do curing using gunny bags of the footing for at least 1 week."
      ]
    }
  ]
};

const BlogPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 mt-[100px]">
      <header className="bg-white  font-light w-[80%] rounded-lg flex flex-col items-start gap-5 justify-center">
        <div className="flex items-center justify-between mb-6">
          <h1 className="md:text-5xl lg:text-5xl text-3xl font-light text-purple-800">{blog.title}</h1>
        </div>
        <p className="md:text-lg lg:text-lg text-lg font-light mb-4 text-purple-800">{blog.description}</p>
      </header>

      <section className="bg-white font-light flex flex-col mb-[20px] w-[80%] items-center justify-center rounded-lg">
        <div className="flex items-start gap-[10px] justify-center flex-col flex-wrap">
          {blog.content.map((section, index) => (
            <div key={index} className="flex items-start justify-start flex-col rounded-lg mb-8">
              <h2 className="md:text-lg lg:text-lg text-lg text-purple-900 mb-2">{section.heading}</h2>
              {section.points.map((point, idx) => (
                <p key={idx} className="md:text-lg lg:text-lg text-lg text-justify text-gray-700 mb-4">{point}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogPage;
