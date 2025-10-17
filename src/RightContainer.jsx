import './App.css';
import './RightContainer.css'
export default function RightContainer() {
    return(
        <div className='col-span-4 mockup-right'>
            <div className='right-div'>
                <div className='rgt-container'>
                    <h2>Cardiovascular outcomes with semaglutide in patients with type 2 diabetes and chronic kidney disease: a prespecified analysis of the FLOW trial</h2>
                    <h6 className='flex flex-wrap'>Authors: Rossing P, et al. | The Lancet Diabetes & Endocrinology | 2024 |<span>Randomized Controlled Trial</span>| <span>High Impact</span>
                    </h6>

                    <p>This prespecified analysis of the FLOW trial examined cardiovascular outcomes in patients with T2DM and CKD. Semaglutide 1.0 mg significantly reduced major adverse cardiovascular events compared to placebo (HR 0.82, 95% CI 0.68–0.98, p=0.029).</p>

                    <div className='btn-div'>
                        <button>Full Text</button>
                        <button>Bookmark</button>
                        <button>Annotate</button>
                        <button>Cite</button>
                    </div>

                </div>
                <div className='rgt-container'>
                    <h2>Real-world cardiovascular safety of GLP-1 receptor agonists: systematic review and meta-analysis</h2>

                    <h6 className='flex flex-wrap'>Authors: Chen Y, et al. | Diabetes Care | 2024 | <span>Meta-analysis</span>|<span>Real-world Evidence</span>
                    </h6>

                    <p>Comprehensive meta-analysis of real-world studies (n=12 databases, 847,291 patients) evaluating cardiovascular safety of GLP-1 RAs. Results confirm trial findings with 23% reduction in MACE (pooled HR 0.77, 95% CI 0.71–0.84).</p>

                    <div className='btn-div'>
                        <button>Full Text</button>
                        <button>Bookmark</button>
                        <button>Annotate</button>
                        <button>Cite</button>
                    </div>
                </div>

                <div className='insight'>
                    <h6>Predictive Insight ☆</h6>
                    <p>Based on publication trends, export 15-20 new cardiovascular outcome studies for GLP-1 aganinsts in Q1 2025, with focus on heart failure outcomes.</p>

                </div>
            </div>
        </div>
    )
}
