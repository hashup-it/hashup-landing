export const createPulsingDot = (map: any, size: number) => {
	//this implements `StyleImageInterface`
	//to draw a pulsing dot icon on the map
	const pulsingDot = {
		width: size,
		height: size,
		data: new Uint8Array(size * size * 4),

		//when the layer is added to the map,
		//get the rendering context for the map canvas
		onAdd: function () {
			const canvas = document.createElement('canvas');
			canvas.width = this.width;
			canvas.height = this.height;
			this.context = canvas.getContext('2d');
		},

		//call once before every frame where the icon will be used
		render: function () {
			const duration = 1000;
			const t = (performance.now() % duration) / duration;

			const radius = (size / 2) * 0.3;
			const outerRadius = (size / 2) * 0.7 * t + radius;
			const context = this.context;

			//draw the outer circle
			context.clearRect(0, 0, this.width, this.height);
			context.beginPath();
			context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
			context.fillStyle = `rgba(255, 63, 63, ${1 - t})`;
			context.fill();

			//draw the inner circle
			context.beginPath();
			context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
			context.fillStyle = 'rgba(255, 63, 63, 1)';
			context.strokeStyle = 'white';
			context.lineWidth = 2 + 4 * (1 - t);
			context.fill();
			context.stroke();

			// Update this image's data with data from the canvas.
			this.data = context.getImageData(0, 0, this.width, this.height).data;

			//continuously repaint the map, resulting
			//in the smooth animation of the dotc
			map?.triggerRepaint();

			//return `true` to let the map know that the image was updated
			return true;
		},
	};
	return pulsingDot;
};
