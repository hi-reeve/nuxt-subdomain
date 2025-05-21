<script setup lang='ts'>

</script>

<template>
	<nav>
		<ul>
			<li>
				<NuxtLink :to="{ name: 'tenant-dashboard' }">
					Dashboard
				</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="{ name: 'tenant-dashboard-manage-user' }">
					Manage User
				</NuxtLink>
			</li>
		</ul>
	</nav>
	<div>
		<slot />
	</div>
</template>