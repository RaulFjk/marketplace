import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { addCategory, deleteCategory } from '../store/actions/categoriesActions';
import { addClassification, deleteClassification } from '../store/actions/classificationActions';
import { addTechnology, deleteTechnology } from '../store/actions/techonolgiesActions';
import { addTool, deleteTool } from '../store/actions/toolsActions';


class AppSettings extends React.Component{

    state = {
        display: '',
        idSelectedTech: '',
        input: false,
        inputField: ''
    }

    componentDidMount(){
        this.setState({
            display: 'categories',
            idSelectedTech: ''
        });
    }

    handleChange = (e) => {
        this.setState({
            display: e.target.value
        });
    }

    handleAddChange = (e) =>{
        this.setState({
            inputField: e.target.value
        });
    }

    handleCategoryDelete = (category) => {
        this.props.deleteCategory(category);
    }

    handleClassificationDelete = (classification) => {
        this.props.deleteClassification(classification);
    }

    handleTechnologyDelete = (technology) => {
        this.props.deleteTechnology(technology);
    }

    handleToolDelete = (tool) => {
        this.props.deleteTool(tool);
    }

    handleAddTools = (e) => {
        this.setState({
            display: 'tools',
            idSelectedTech: e
        });
    }

    handleAddTableEntry = () =>{
        if(this.state.input === false)
            this.setState({
                input: true
            });
      
        
    }

    handleCreate = () => {
           if(this.state.display ==='categories'){
                const category = {
                    name: this.state.inputField
                }
                this.props.addCategory(category);
                this.setState({
                    input:false
                }); }else if(this.state.display === 'technologies'){
                const technology = {
                    language: this.state.inputField
                }
                this.props.addTechnology(technology);
                this.setState({
                    input:false
                }); }else if (this.state.display === 'classifications'){
            
                const classification = {
                    name: this.state.inputField
                }
                this.props.addClassification(classification);
                this.setState({
                    input:false
                }); }else if(this.state.display === 'tools'){
                const tool = {
                    name: this.state.inputField,
                    relatedTech: this.state.idSelectedTech
                }
                this.props.addTool(tool);   
                this.setState({
                    input:false
                }); 
            }
         
        
        // switch (this.state.display) {
        //     case 'categories':
        //         const category = {
        //             name: this.state.inputField
        //         }
        //         this.props.addCategory(category);
        //         this.setState({
        //             input:false
        //         });
        //     case 'technologies':
        //         const technology = {
        //             language: this.state.inputField
        //         }
        //         this.props.addTechnology(technology);
        //         this.setState({
        //             input:false
        //         });
        //     case 'classifications':
        //         const classification = {
        //             name: this.state.inputField
        //         }
        //         this.props.addClassification(classification);
        //         this.setState({
        //             input:false
        //         });
        //     case 'tools':
        //         const tool = {
        //             name: this.state.inputField,
        //             relatedTech: this.state.idSelectedTech
        //         }
        //         this.props.addTool(tool);   
        //         this.setState({
        //             input:false
        //         });
                
        // }
    }
    
    render() {
        const { auth, categories, classifications, technologies, tools } = this.props;
        console.log(this.state);
        if(!auth.uid) return <Redirect to='/signin' />

        return(
            <div className="mx-32 mt-10">
                <div className="my-2 flex sm:flex-row flex-col">
                    <div className="flex flex-row mb-1 sm:mb-0 w-full">
                        <label className="text-gray-500 font-bold mr-3 my-2"> Manage </label>
                        <div className="relative w-52 border round border-1 border-gray-400">
                            <select value={this.state.display}
                                    onChange={this.handleChange}
                                className="appearance-none h-full rounded-r  sm:rounded-r-none sm:border-r-0  block appearance-none w-full bg-white text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option value="categories">Categories</option>
                                <option value="classifications">Classifications</option>
                                <option value="technologies">Technologies</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex w-full justify-end">
                            <div>
                            <button onClick={this.handleAddTableEntry} className="bg-blue-800 focus:outline-none text-white pl-2 pr-5 py-2 rounded-full border border-blue-600  hover:bg-blue-500 mx-2 hover:text-gray-100" >
                                        <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 mr-1 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                            C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                            C15.952,9,16,9.447,16,10z" />
                                        </svg>
                                        Add
                                    </button>
                            </div>
                        </div>
                </div>
            </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
                <thead>
                    <tr>
                        {this.state.display === "categories" &&
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Category
                        </th> }
                        {this.state.display === "classifications" &&
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Classifications
                        </th> }
                        {this.state.display === "technologies" &&
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Technologies
                        </th> }
                        {this.state.display === "tools" &&
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Tools
                        </th> }
                        <th
                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Created By
                        </th>
                        <th
                            class="pl-3 pr-10 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/*---------------------------------------- Input Line hidden -------------------------------------- */}
                { this.state.input === true &&
                        <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 border border-2 border-gray-400 rounded" onChange={this.handleAddChange} id="input" type="text"  placeholder="Enter here...." required="" />
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className='flex flex-wrap 
                                justify-end mt-4 mx-4 pt-4 border-t 
                                border-gray-300 border-solid
                                sm:ml-10 sm:border-0 sm:pt-0 sm:mt-0'>
                            <button className="inline-block p-3 ml-3 text-center text-white transition bg-blue-400 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" onClick={this.handleCreate} >
                                <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 inline-block">
                                        <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                            C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                            C15.952,9,16,9.447,16,10z" />
                                </svg>
                            </button>
                            </div>
                        </td>
                    </tr>     
                }
                    { this.state.display === "categories" &&
                    categories.map(category => (
                        <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                       {category.name}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className='flex flex-wrap 
                                justify-end mt-4 mx-4 pt-4 border-t 
                                border-gray-300 border-solid
                                sm:ml-10 sm:border-0 sm:pt-0 sm:mt-0'>
                            <button className="inline-block p-3 ml-3 text-center text-white transition bg-red-600 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" onClick={(e) => this.handleCategoryDelete(category)} >
                                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"/>
                                </svg>
                            </button>
                            </div>
                        </td>
                    </tr>

                    ))
                    
                }
                 { this.state.display === "classifications" &&
                    classifications.map(classification => (
                        <tr key={classification.id}>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                       {classification.name}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className='flex flex-wrap 
                                justify-end mt-4 mx-4 pt-4 border-t 
                                border-gray-300 border-solid
                                sm:ml-10 sm:border-0 sm:pt-0 sm:mt-0'> 
                            <button className="inline-block p-3 ml-3 text-center text-white transition bg-red-600 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" onClick={(e) => this.handleClassificationDelete(classification)}>
                                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"/>
                                </svg>
                            </button>
                            </div>
                        </td>
                    </tr>

                    ))                  
                }
                 { this.state.display === "technologies" &&
                    technologies.map(technology => (
                        <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                       {technology.language}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className='flex flex-wrap 
                                justify-end mt-4 mx-4 pt-4 border-t 
                                border-gray-300 border-solid
                                sm:ml-10 sm:border-0 sm:pt-0 sm:mt-0'>
                                <button  onClick={(e) => this.handleAddTools(technology.id)} className="bg-blue-800 text-white pl-2 pr-5 py-2 rounded border border-blue-600  hover:bg-blue-500 mx-2 hover:text-gray-100" >
                                    <svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" className="w-6 h-6 mr-1 inline-block">
                                    <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                        C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                        C15.952,9,16,9.447,16,10z" />
                                    </svg>
                                    Add/Edit Tools
                                </button>
                            <button className="inline-block p-3 ml-3 text-center text-white transition bg-red-600 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" onClick={(e) => this.handleTechnologyDelete(technology)} >
                                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"/>
                                </svg>
                            </button>
                            </div>
                        </td>
                    </tr>

                    ))
                    
                }
                 { this.state.display === "tools" &&
                    tools.map(tool => {
                        if(tool.relatedTech === this.state.idSelectedTech)
                        return (<tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-full h-full rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                        alt="" />
                                </div>
                                <div class="ml-3">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                       {tool.name}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className='flex flex-wrap 
                                justify-end mt-4 mx-4 pt-4 border-t 
                                border-gray-300 border-solid
                                sm:ml-10 sm:border-0 sm:pt-0 sm:mt-0'>
                            <button className="inline-block p-3 ml-3 text-center text-white transition bg-red-600 rounded-full shadow ripple hover:shadow-lg hover:bg-gray-200 focus:outline-none" onClick={(e) => this.handleToolDelete(tool)} >
                                <svg className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"/>
                                </svg>
                            </button>
                            </div>
                        </td>
                    </tr> );
                    }
                    )
                    
                }
                
                </tbody>
            </table>
        </div>
    </div> 
    </div>
    );
    }
}

const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth,
        categories: state.firestore.ordered.categories || [],
        classifications: state.firestore.ordered.classifications || [],
        technologies: state.firestore.ordered.technologies || [],
        tools: state.firestore.ordered.tools || []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category) => dispatch(addCategory(category)),
        deleteCategory: (category) => dispatch(deleteCategory(category)),
        addClassification: (classification) => dispatch(addClassification(classification)),
        deleteClassification: (classification) => dispatch(deleteClassification(classification)),
        addTechnology: (technology) => dispatch(addTechnology(technology)),
        deleteTechnology: (technology) => dispatch(deleteTechnology(technology)),
        addTool: (tool) => dispatch(addTool(tool)),
        deleteTool: (tool) => dispatch(deleteTool(tool))
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(["categories","classifications", "technologies", "tools"])
   )(AppSettings);