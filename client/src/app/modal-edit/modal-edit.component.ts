import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ToolModel} from '../models/tool.model';
import {NgForm} from '@angular/forms';
import {ToolsService} from '../services/tools.service';
import {Http} from '@angular/http';

@Component({
    selector: 'app-modal-edit',
    templateUrl: './modal-edit.component.html',
    styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {
    @Input() tool: ToolModel;
    toolCategoryNames: string[];
    @ViewChild('f') newTool: NgForm;
    hidden = true;
    tags: string[] = [];
    tools: ToolModel[] = [];

    constructor(private http: Http, private toolsService: ToolsService) {
    }

    ngOnInit() {
        this.toolsService.getTools().subscribe(
            (response) => {
                this.tools = response.json();
                this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
            }
        );
        this.tags = this.tool.tags;
    }

    showModal() {
        this.hidden = false;
    }

    hiddenModal() {
        this.hidden = true;
    }

    addTags() {
        if (this.newTool.value.tag !== '' && !this.tags.includes(this.newTool.value.tag)) {
            this.tags = [...this.tags, this.newTool.value.tag];
        }
    }

    removeTag(tagToRemove: string) {
        this.tags = this.tags.filter(tag => tag !== tagToRemove);
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
                this.toolsService.editTool(tool, this.tool._id).subscribe(
                    response => {
                        tool.category = response.json().category;
                        tool._id = response.json()._id;
                        this.tools = [...this.tools, tool];
                        this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
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
                this.toolsService.editTool(tool, this.tool._id).subscribe(
                    response => {
                        tool.category = response.json().category;
                        tool._id = response.json()._id;
                        this.tools = [...this.tools, tool];
                        this.toolCategoryNames = this.toolsService.getCategoryNames(this.tools);
                    }
                );
            }

        } else {
            console.log('no name or/and category or/and details');
        }
        this.hidden = true;
    }
}
