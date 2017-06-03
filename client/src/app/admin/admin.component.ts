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

    constructor(private http: Http, private toolsService: ToolsService, private alertService: AlertService) {
    }

    ngOnInit() {
        this.toolsService.getTools().subscribe(
            (response) => {
                this.tools = response.json();
                this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
            }
        );
    }

    addTags() {
        if (this.newTool.value.tag !== '' && !this.tags.includes(this.newTool.value.tag)) {
            this.tags = [...this.tags, this.newTool.value.tag];
        }
    }

    removeTag(tagToRemove: string) {
        this.tags = this.tags.filter(tag => tag !== tagToRemove);
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

    onSubmit() {
        if (this.newTool.value.name.length !== 0 &&
            this.newTool.value.details.length !== 0) {
            if (this.newTool.value.category.length !== 0 &&
                this.newTool.value.category !== 'Add category...') {
                const tool: ToolModel = {
                    'name': this.newTool.value.name,
                    'details': this.newTool.value.details,
                    'image': this.newTool.value.image,
                    'favorite': false,
                    'category': this.newTool.value.category,
                    'tags': this.tags
                };
                this.newTool.reset();
                this.tags = [];
                this.http.post('/api/tools', tool).subscribe(
                    response => {
                        tool._id = response.json()._id;
                        this.tools = [...this.tools, tool];
                        this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
                        this.alertService.showModal('Added new tool!');
                    }
                );
            } else if (this.newTool.value.newCategory.length !== 0) {
                const tool: ToolModel = {
                    'name': this.newTool.value.name,
                    'details': this.newTool.value.details,
                    'image': this.newTool.value.image,
                    'favorite': false,
                    'category': this.newTool.value.newCategory,
                    'tags': this.tags
                };
                this.newTool.reset();
                this.tags = [];
                this.http.post('/api/tools', tool).subscribe(
                    response => {
                        tool._id = response.json()._id;
                        this.tools = [...this.tools, tool];
                        this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
                        this.alertService.showModal('Added new tool!');
                    }
                );
            }

        } else {
            this.alertService.showModal('Tool was not added, please fill name, details and category fields!');
        }
    }
}
