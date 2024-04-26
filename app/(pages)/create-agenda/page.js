export default function Createagenda(){
    return (
           <div className="body flex-grow-1 px-3">
            <div className="container-lg">
                <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4">
                    <div className="card-header al_hd">Create Agenda</div>
                    <div className="card-body set_screen">
                        <form>
                        <div className="row">
                            <div className="mb-3 col-lg-12">
                            <label className="form-label" for="exampleFormControlInput1">Create Agenda</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected="">Create Agenda</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            </div>
                            <div className="mb-3 col-lg-12">
                            <label className="form-label" for="exampleFormControlInput1">Meeting Id</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected="">Meeting Id</option>
                                <option value="1">12563</option>
                                <option value="2">856</option>
                                <option value="3">4523</option>
                            </select>
                            </div>

                            <div className="d-grid gap-2 col-12 mx-auto">
                            <button className="btn-success btn btn-lg" type="button">Add Agenda</button>
                            </div>

                            <div className="mb-3 col-lg-12">
                            <label className="form-label" for="exampleFormControlInput1">Question</label>
                            <textarea className="form-control" placeholder="Question" required=""></textarea>

                            </div>
                            <div className="mb-3 col-lg-12">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label" for="inlineCheckbox1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" /> 
                                <label className="form-check-label" for="inlineCheckbox2">No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                                <label className="form-check-label" for="inlineCheckbox2">Abstain</label>
                            </div>
                            </div>
                            <div className="d-grid gap-2 col-12 mx-auto">
                            <button className="btn-success btn btn-lg" type="button">Submit</button>
                            </div>


                        </div>

                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}