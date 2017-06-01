import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ToolModel} from '../models/tool.model';
import {Http} from '@angular/http';
import {ToolsService} from '../services/tools.service';

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

    constructor(private http: Http, private toolsService: ToolsService) {
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

    onSubmit() {
        if (this.newTool.value.name.length !== 0 &&
            this.newTool.value.details !== 0 &&
            this.newTool.value.category !== '') {
            const tool: ToolModel = {
                'name': this.newTool.value.name,
                'details': this.newTool.value.details,
                'image': this.newTool.value.image,
                'favorite': false,
                'category': this.newTool.value.category,
                'tags': this.tags
            };
            this.http.post('/api/tools', tool).subscribe(
                response => console.log(response)
            );
        } else {
            console.log('no name or/and category or/and details');
        }
    }
}
