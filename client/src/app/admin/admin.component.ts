import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToolModel} from '../models/tool.model';
import {Http} from '@angular/http';
import {ToolsService} from '../services/tools.service';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    @ViewChild('f') newTool: NgForm;
    tags: string[] = [];
    toolCategoryNames: string[] = [];
    tools: ToolModel[] = [];
    addedTool: ToolModel;
    newCategory: string;
    newTag: string;

    constructor(private http: Http, private toolsService: ToolsService, private alertService: AlertService) {
    }

    ngOnInit() {
        this.addedTool = new ToolModel('', '' , '' , false , 'Add category...', []);
        this.toolsService.getTools().subscribe(
            (response) => {
                this.tools = response.json();
                this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
            }
        );
    }

    addTags() {
        if (this.newTag !== '' && !this.addedTool.tags.includes(this.newTag)) {
            this.addedTool.tags = [...this.addedTool.tags, this.newTag];
        }
    }

    removeTag(tagToRemove: string) {
        this.addedTool.tags = this.addedTool.tags.filter(tag => tag !== tagToRemove);
    }

    deleteTool(tool: ToolModel) {
        this.toolsService.deleteTool(tool._id).subscribe(
            (response) => {
                this.tools = this.tools.filter(toolFilter => toolFilter._id !== tool._id);
                this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
                this.alertService.showModal('Deleted tool!');
            }
        );
    }

    toolEdited(tool: ToolModel, index: number) {
        this.tools[index] = tool;
        this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
    }

    hasNewCategory() {
        return !(this.addedTool.category.length !== 0 && this.addedTool.category !== 'Add category...');
    }

    isFormCorrect() {
        return this.addedTool.name.length !== 0 &&
            this.addedTool.details.length !== 0 &&
            this.addedTool.category.length !== 0;
    }

    clearForm() {
        this.addedTool = new ToolModel('', '' , '' , false , 'Add category...', []);
        this.newCategory = '';
        this.newTag = '';
    }

    onSubmit() {
        if (this.hasNewCategory()) {
            this.addedTool.category = this.newCategory;
        }
        if (this.isFormCorrect()) {
            this.http.post('/api/tools', this.addedTool).subscribe(
                response => {
                    this.addedTool._id = response.json()._id;
                    this.tools = [...this.tools, this.addedTool];
                    this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
                    this.alertService.showModal('Added new tool: ' + this.addedTool.name);
                    this.clearForm();
                }
            );
        } else {
            this.alertService.showModal('Tool was not added, please fill name, details and category fields!');
        }
    }
}
